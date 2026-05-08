'use server';

import { headers } from 'next/headers';
import { checkRateLimit } from '@/lib/rate-limit';
import { sendEmail } from '@/lib/email';
import { buildContactEmail, type ContactSubmission } from '@/lib/contact-email';

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: 'validation' | 'rate_limit' | 'send_failed' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+1\d{10}$/;

function validate(input: ContactSubmission): boolean {
  if (typeof input !== 'object' || input === null) return false;
  const name = (input.name ?? '').trim();
  if (name.length < 2 || name.length > 100) return false;
  const email = (input.email ?? '').trim();
  if (email.length > 254 || !EMAIL_RE.test(email)) return false;
  if (!PHONE_RE.test(input.phone ?? '')) return false;
  const message = (input.message ?? '').trim();
  if (message.length < 10 || message.length > 2000) return false;
  if (typeof input.smsConsent !== 'boolean') return false;
  if (typeof input.consentTextShown !== 'string' || input.consentTextShown.length === 0) return false;
  return true;
}

export async function submitContact(
  input: ContactSubmission & { honeypot: string }
): Promise<SubmitResult> {
  if ((input.honeypot ?? '') !== '') {
    return { ok: true };
  }

  if (!validate(input)) {
    return { ok: false, error: 'validation' };
  }

  const h = await headers();
  const forwarded = h.get('x-forwarded-for') ?? '';
  const ip = forwarded.split(',')[0]?.trim() || h.get('x-real-ip') || 'unknown';
  const userAgent = h.get('user-agent') ?? 'unknown';
  const referer = h.get('referer') ?? 'unknown';

  const rl = checkRateLimit(ip);
  if (!rl.allowed) {
    return { ok: false, error: 'rate_limit' };
  }

  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!recipient || !from) {
    console.error('Missing CONTACT_RECIPIENT_EMAIL or CONTACT_FROM_EMAIL env var');
    return { ok: false, error: 'send_failed' };
  }

  const { subject, html, text } = buildContactEmail(
    {
      name: input.name.trim(),
      email: input.email.trim(),
      phone: input.phone,
      message: input.message.trim(),
      smsConsent: input.smsConsent,
      consentTextShown: input.consentTextShown,
    },
    { ip, userAgent, referer }
  );

  try {
    await sendEmail({
      to: recipient,
      from,
      replyTo: input.email.trim(),
      subject,
      html,
      text,
    });
  } catch (err) {
    console.error('Contact form send failed:', err);
    return { ok: false, error: 'send_failed' };
  }

  return { ok: true };
}
