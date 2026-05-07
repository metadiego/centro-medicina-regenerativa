# Contact Form with TCR-Compliant SMS Consent — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Spec:** `docs/superpowers/specs/2026-05-07-contact-form-tcr-compliance-design.md`

**Goal:** Add a contact-request form with TCR-compliant SMS opt-in to `/contacto`, plus update `/privacidad` with the TCR-required SMS disclosure section.

**Architecture:** Client React form → Next.js server action → in-memory rate limit + validation → SendGrid REST API (via `fetch`) → email to `atencion@centrodemedicinaregenerativa.com` with embedded TCR audit metadata.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind 4, lucide-react, SendGrid v3 REST API.

**Testing approach:** Project has no automated test framework; spec explicitly defers tests to manual QA. Each task includes manual verification steps. The final task runs `npm run build` and a browser smoke test.

---

## File Structure

| File | Status | Responsibility |
|---|---|---|
| `lib/rate-limit.ts` | NEW | In-memory IP rate limiter (`Map<ip, timestamps[]>` with TTL) |
| `lib/sendgrid.ts` | NEW | Single-purpose SendGrid v3 send wrapper (one `fetch`) |
| `lib/contact-email.ts` | NEW | Build email subject + HTML + plain-text body with TCR audit block |
| `app/actions/submit-contact.ts` | NEW | Server action: honeypot, validation, rate limit, send |
| `components/ContactForm.tsx` | NEW | Client component: form UI + state + submission UX |
| `app/contacto/page.tsx` | MODIFY | Insert `<ContactForm />` between CTA and Newsletter sections |
| `app/privacidad/page.tsx` | MODIFY | Add bilingual section 11.3, bump "Última actualización" |
| `.env.local.example` | NEW | Template for required env vars |

---

## Task 1: Rate limiter utility

**Files:**
- Create: `lib/rate-limit.ts`

- [ ] **Step 1: Create `lib/rate-limit.ts`**

```ts
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3;

const buckets = new Map<string, number[]>();

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterMs?: number } {
  const now = Date.now();
  const cutoff = now - WINDOW_MS;

  const timestamps = (buckets.get(ip) ?? []).filter((t) => t > cutoff);

  if (timestamps.length >= MAX_REQUESTS) {
    const oldest = timestamps[0];
    return { allowed: false, retryAfterMs: oldest + WINDOW_MS - now };
  }

  timestamps.push(now);
  buckets.set(ip, timestamps);
  return { allowed: true };
}

// Exposed for unit-style manual tests only
export function __resetRateLimit() {
  buckets.clear();
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/rate-limit.ts
git commit -m "feat: add in-memory IP rate limiter for contact form"
```

---

## Task 2: SendGrid wrapper

**Files:**
- Create: `lib/sendgrid.ts`

- [ ] **Step 1: Create `lib/sendgrid.ts`**

```ts
type SendEmailParams = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
};

export async function sendEmail(params: SendEmailParams): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    throw new Error('SENDGRID_API_KEY is not set');
  }

  const body = {
    personalizations: [
      {
        to: [{ email: params.to }],
        ...(params.replyTo ? { reply_to: { email: params.replyTo } } : {}),
      },
    ],
    from: { email: params.from },
    ...(params.replyTo ? { reply_to: { email: params.replyTo } } : {}),
    subject: params.subject,
    content: [
      { type: 'text/plain', value: params.text },
      { type: 'text/html', value: params.html },
    ],
  };

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`SendGrid send failed: ${response.status} ${errorBody}`);
  }
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/sendgrid.ts
git commit -m "feat: add SendGrid v3 REST send wrapper"
```

---

## Task 3: Contact email builder

**Files:**
- Create: `lib/contact-email.ts`

- [ ] **Step 1: Create `lib/contact-email.ts`**

```ts
export type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  message: string;
  smsConsent: boolean;
  consentTextShown: string;
};

export type RequestMetadata = {
  ip: string;
  userAgent: string;
  referer: string;
};

export type BuiltEmail = {
  subject: string;
  html: string;
  text: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatTimestamp(): { iso: string; pr: string } {
  const now = new Date();
  return {
    iso: now.toISOString(),
    pr: now.toLocaleString('es-PR', { timeZone: 'America/Puerto_Rico' }),
  };
}

export function buildContactEmail(
  submission: ContactSubmission,
  metadata: RequestMetadata
): BuiltEmail {
  const consentLabel = submission.smsConsent ? 'SÍ' : 'NO';
  const subject = `Nuevo contacto: ${submission.name} — SMS consent: ${consentLabel}`;
  const ts = formatTimestamp();

  const text = [
    'NUEVO MENSAJE DE CONTACTO',
    '========================',
    '',
    `Nombre:   ${submission.name}`,
    `Email:    ${submission.email}`,
    `Teléfono: ${submission.phone}`,
    '',
    'Mensaje:',
    submission.message,
    '',
    '------------------------',
    'TCR AUDIT BLOCK',
    '------------------------',
    `SMS consent:        ${consentLabel}`,
    `Submitted at (UTC): ${ts.iso}`,
    `Submitted at (PR):  ${ts.pr}`,
    `IP:                 ${metadata.ip}`,
    `User-Agent:         ${metadata.userAgent}`,
    `Referer:            ${metadata.referer}`,
    '',
    'Consent text shown to user:',
    submission.consentTextShown,
  ].join('\n');

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; color: #111; max-width: 640px; margin: 0 auto;">
  <h2 style="color: #0891b2;">Nuevo mensaje de contacto</h2>
  <table style="border-collapse: collapse; width: 100%;">
    <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Nombre:</td><td>${escapeHtml(submission.name)}</td></tr>
    <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Email:</td><td><a href="mailto:${escapeHtml(submission.email)}">${escapeHtml(submission.email)}</a></td></tr>
    <tr><td style="padding: 6px 12px 6px 0; font-weight: 600;">Teléfono:</td><td><a href="tel:${escapeHtml(submission.phone)}">${escapeHtml(submission.phone)}</a></td></tr>
  </table>
  <h3 style="margin-top: 20px;">Mensaje</h3>
  <p style="white-space: pre-wrap; background: #f7f7f7; padding: 12px; border-radius: 8px;">${escapeHtml(submission.message)}</p>

  <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
  <h3 style="color: #6b7280; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">TCR Audit Block</h3>
  <table style="border-collapse: collapse; font-size: 13px; color: #374151;">
    <tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">SMS consent:</td><td>${consentLabel}</td></tr>
    <tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">Submitted at (UTC):</td><td>${escapeHtml(ts.iso)}</td></tr>
    <tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">Submitted at (PR):</td><td>${escapeHtml(ts.pr)}</td></tr>
    <tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">IP:</td><td>${escapeHtml(metadata.ip)}</td></tr>
    <tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">User-Agent:</td><td>${escapeHtml(metadata.userAgent)}</td></tr>
    <tr><td style="padding: 4px 12px 4px 0; font-weight: 600;">Referer:</td><td>${escapeHtml(metadata.referer)}</td></tr>
  </table>
  <p style="font-size: 13px; color: #374151; margin-top: 12px;"><strong>Consent text shown to user:</strong></p>
  <p style="font-size: 13px; color: #374151; background: #f9fafb; padding: 10px; border-radius: 6px; white-space: pre-wrap;">${escapeHtml(submission.consentTextShown)}</p>
</body>
</html>
  `.trim();

  return { subject, html, text };
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/contact-email.ts
git commit -m "feat: add contact email builder with TCR audit block"
```

---

## Task 4: Server action

**Files:**
- Create: `app/actions/submit-contact.ts`

- [ ] **Step 1: Create `app/actions/submit-contact.ts`**

```ts
'use server';

import { headers } from 'next/headers';
import { checkRateLimit } from '@/lib/rate-limit';
import { sendEmail } from '@/lib/sendgrid';
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

export async function submitContact(input: ContactSubmission & { honeypot: string }): Promise<SubmitResult> {
  // Honeypot: silently succeed for bots
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
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/actions/submit-contact.ts
git commit -m "feat: add submitContact server action with rate limit and validation"
```

---

## Task 5: ContactForm component

**Files:**
- Create: `components/ContactForm.tsx`

- [ ] **Step 1: Create `components/ContactForm.tsx`**

```tsx
'use client';

import { useState, useTransition } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitContact } from '@/app/actions/submit-contact';
import { trackEvent } from '@/lib/utils';
import Link from 'next/link';

const CONSENT_TEXT =
  'Acepto recibir mensajes de texto (SMS) de Centro de Medicina Regenerativa sobre recordatorios de citas, confirmaciones, cambios de horario, ubicación de las oficinas, promociones y notificaciones. La frecuencia de los mensajes varía. Pueden aplicar tarifas estándar de mensajes y datos. Responde STOP para cancelar la suscripción en cualquier momento o HELP para obtener ayuda. Consulte nuestra Política de Privacidad y Términos de Uso.';

const PHONE_DIGITS_RE = /\d/g;

function formatPhone(input: string): string {
  const digits = (input.match(PHONE_DIGITS_RE) ?? []).join('').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function normalizePhoneE164(input: string): string {
  const digits = (input.match(PHONE_DIGITS_RE) ?? []).join('');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return '';
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = 'idle' | 'submitting' | 'success' | 'error';
type ErrorKind = null | 'validation' | 'rate_limit' | 'send_failed';

const ERROR_MESSAGES: Record<Exclude<ErrorKind, null>, string> = {
  validation: 'Por favor revisa los campos del formulario.',
  rate_limit:
    'Has enviado varios mensajes recientemente. Por favor llámanos al +1 (787) 780-7575 si es urgente.',
  send_failed:
    'No pudimos enviar tu mensaje. Por favor llámanos al +1 (787) 780-7575 o intenta nuevamente.',
};

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneDisplay, setPhoneDisplay] = useState('');
  const [message, setMessage] = useState('');
  const [smsConsent, setSmsConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorKind, setErrorKind] = useState<ErrorKind>(null);
  const [isPending, startTransition] = useTransition();

  const phoneE164 = normalizePhoneE164(phoneDisplay);
  const phoneValid = phoneE164.length === 12;
  const emailValid = EMAIL_RE.test(email.trim());
  const nameValid = name.trim().length >= 2 && name.trim().length <= 100;
  const messageValid = message.trim().length >= 10 && message.trim().length <= 2000;
  const formValid = nameValid && emailValid && phoneValid && messageValid;

  function reset() {
    setName('');
    setEmail('');
    setPhoneDisplay('');
    setMessage('');
    setSmsConsent(false);
    setHoneypot('');
    setState('idle');
    setErrorKind(null);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formValid || state === 'submitting') return;

    setState('submitting');
    setErrorKind(null);

    startTransition(async () => {
      try {
        const result = await submitContact({
          name: name.trim(),
          email: email.trim(),
          phone: phoneE164,
          message: message.trim(),
          smsConsent,
          consentTextShown: CONSENT_TEXT,
          honeypot,
        });

        if (result.ok) {
          trackEvent('contact_form_submitted', { sms_consent: smsConsent });
          setState('success');
        } else {
          setErrorKind(result.error);
          setState('error');
        }
      } catch {
        setErrorKind('send_failed');
        setState('error');
      }
    });
  }

  if (state === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 text-center">
        <div className="bg-green-100 p-4 rounded-full mx-auto w-fit mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-2xl font-medium text-gray-900 mb-3">¡Mensaje enviado!</h3>
        <p className="text-gray-600 mb-8">Te contactaremos a la brevedad.</p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-cyan-600 bg-cyan-50 hover:bg-cyan-100 rounded-xl transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const submitting = state === 'submitting' || isPending;
  const messageCount = message.length;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
          Envíanos un <span className="font-medium text-cyan-600">Mensaje</span>
        </h3>
        <p className="text-gray-600">Completa el formulario y te contactaremos a la brevedad.</p>
      </div>

      {state === 'error' && errorKind && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 rounded-xl p-4"
        >
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <p className="text-sm">{ERROR_MESSAGES[errorKind]}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot — visually hidden, not focusable, not announced */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
        >
          <label>
            Website
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            disabled={submitting}
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            disabled={submitting}
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Número de teléfono móvil <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            disabled={submitting}
            inputMode="tel"
            placeholder="(787) 555-0100"
            value={phoneDisplay}
            onChange={(e) => setPhoneDisplay(formatPhone(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
          />
          {phoneDisplay.length > 0 && !phoneValid && (
            <p className="mt-1 text-xs text-red-600">Ingresa un número de 10 dígitos.</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje / motivo de consulta <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            disabled={submitting}
            rows={4}
            minLength={10}
            maxLength={2000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500 resize-y"
          />
          {messageCount >= 1500 && (
            <p className="mt-1 text-xs text-gray-500">{messageCount} / 2000 caracteres</p>
          )}
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              disabled={submitting}
              checked={smsConsent}
              onChange={(e) => setSmsConsent(e.target.checked)}
              className="mt-1 h-5 w-5 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500 flex-shrink-0"
            />
            <span className="text-sm text-gray-700 leading-relaxed">
              Acepto recibir mensajes de texto (SMS) de Centro de Medicina Regenerativa sobre recordatorios de citas,
              confirmaciones, cambios de horario, ubicación de las oficinas, promociones y notificaciones. La frecuencia
              de los mensajes varía. Pueden aplicar tarifas estándar de mensajes y datos. Responde <strong>STOP</strong>{' '}
              para cancelar la suscripción en cualquier momento o <strong>HELP</strong> para obtener ayuda. Consulte
              nuestra{' '}
              <Link href="/privacidad" className="text-cyan-600 hover:underline">
                Política de Privacidad
              </Link>{' '}
              y{' '}
              <Link href="/terminos" className="text-cyan-600 hover:underline">
                Términos de Uso
              </Link>
              .
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={!formValid || submitting}
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg"
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Enviar mensaje</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/ContactForm.tsx
git commit -m "feat: add ContactForm component with SMS consent capture"
```

---

## Task 6: Wire ContactForm into /contacto page

**Files:**
- Modify: `app/contacto/page.tsx`

- [ ] **Step 1: Add the import**

In `app/contacto/page.tsx`, find the existing import block (lines 3-8). Add the new import after the `Footer` import:

```tsx
import ContactForm from '@/components/ContactForm';
```

The result around line 3-8 should look like:

```tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/utils';
```

- [ ] **Step 2: Insert the form section**

In `app/contacto/page.tsx`, locate the closing `</section>` of the "Contact Form & Hours" section (the section ending around line 232, just before the `{/* Newsletter Subscription */}` comment).

**Insert this new section between them:**

```tsx
        {/* Contact Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <ContactForm />
          </div>
        </section>
```

The surrounding region should look like:

```tsx
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <ContactForm />
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-white">
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add app/contacto/page.tsx
git commit -m "feat: add contact form section to /contacto page"
```

---

## Task 7: Update privacy policy with SMS section

**Files:**
- Modify: `app/privacidad/page.tsx`

- [ ] **Step 1: Bump the "Última actualización" date**

In `app/privacidad/page.tsx`, find the line that reads (around line 74):

```tsx
                {language === 'es' ? 'Última actualización: Abril 22, 2025' : 'Last updated: April 22, 2025'}
```

Replace with:

```tsx
                {language === 'es' ? 'Última actualización: Mayo 7, 2026' : 'Last updated: May 7, 2026'}
```

- [ ] **Step 2: Add section 11.3 (SMS Communications)**

In `app/privacidad/page.tsx`, locate the end of section 11.2 — the `<div>` block whose `<h3>` reads "11.2 Comunicaciones Comerciales". This block lives inside the "Section 11" container (around lines 478-490) and ends with `</ul></div>` just before the closing `</div>` of Section 11 (around line 491).

**Insert this new sub-section AFTER the closing `</div>` of 11.2 and BEFORE the closing `</div>` of Section 11:**

```tsx
                <div className="mt-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {language === 'es' ? '11.3 Comunicaciones vía SMS' : '11.3 SMS Communications'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'es' ? (
                      'La información de teléfonos móviles y el consentimiento de SMS recopilados a través de nuestros formularios NO serán compartidos, vendidos ni divulgados con terceros para fines de marketing. Los datos solo se utilizan para las comunicaciones autorizadas por el usuario. Para cancelar la suscripción, responda STOP a cualquier mensaje. Para obtener ayuda, responda HELP.'
                    ) : (
                      'The mobile phone information and SMS consent collected through our forms will NOT be shared, sold, or disclosed to third parties for marketing purposes. The data is used only for the communications authorized by the user. To unsubscribe, reply STOP to any message. For help, reply HELP.'
                    )}
                  </p>
                </div>
```

The surrounding region after the edit should look like:

```tsx
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">11.2 Comunicaciones Comerciales</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Requieren consentimiento explícito previo</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Opción de darse de baja en cada comunicación</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {language === 'es' ? '11.3 Comunicaciones vía SMS' : '11.3 SMS Communications'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'es' ? (
                      'La información de teléfonos móviles y el consentimiento de SMS recopilados a través de nuestros formularios NO serán compartidos, vendidos ni divulgados con terceros para fines de marketing. Los datos solo se utilizan para las comunicaciones autorizadas por el usuario. Para cancelar la suscripción, responda STOP a cualquier mensaje. Para obtener ayuda, responda HELP.'
                    ) : (
                      'The mobile phone information and SMS consent collected through our forms will NOT be shared, sold, or disclosed to third parties for marketing purposes. The data is used only for the communications authorized by the user. To unsubscribe, reply STOP to any message. For help, reply HELP.'
                    )}
                  </p>
                </div>
              </div>

              {/* Section 12 */}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add app/privacidad/page.tsx
git commit -m "docs: add SMS communications section 11.3 to privacy policy"
```

---

## Task 8: Add env var template

**Files:**
- Create: `.env.local.example`

- [ ] **Step 1: Create `.env.local.example`**

```
# SendGrid API key (https://app.sendgrid.com/settings/api_keys)
SENDGRID_API_KEY=

# Email address that receives contact form submissions
CONTACT_RECIPIENT_EMAIL=atencion@centrodemedicinaregenerativa.com

# From-address for outgoing emails — MUST be SendGrid-verified
# (single-sender verification or domain authentication on centrodemedicinaregenerativa.com)
CONTACT_FROM_EMAIL=no-reply@centrodemedicinaregenerativa.com
```

- [ ] **Step 2: Verify `.env.local` is gitignored**

Run: `grep -E "^\.env" /Users/diegoolalde/Documents/CMR/dev/medicina-regenerativa-web/.gitignore`
Expected: at minimum `.env*` or `.env.local` listed. If not, add `.env*.local` to `.gitignore`.

- [ ] **Step 3: Commit**

```bash
git add .env.local.example
git commit -m "chore: add env template for contact form"
```

---

## Task 9: Build verification

**Files:**
- (none — verification only)

- [ ] **Step 1: Build the project**

Run: `npm run build`
Expected: build succeeds, no TypeScript errors, no lint errors. The new files are included in the build output.

- [ ] **Step 2: If build fails — fix and re-run**

Read the error output, fix the indicated file, re-run `npm run build` until it passes. Do NOT proceed until the build is clean.

- [ ] **Step 3: Commit any fixes**

If any fixes were needed:

```bash
git add -A
git commit -m "fix: address build errors"
```

---

## Task 10: Manual smoke test (browser)

**Prerequisites:**
1. Create `.env.local` from `.env.local.example` with a valid `SENDGRID_API_KEY` and verified sender address.
2. If a test SendGrid account is unavailable, you can still verify steps 1–6 below by stubbing `lib/sendgrid.ts` to log instead of fetch — but **revert any stub before committing**.

- [ ] **Step 1: Start the dev server**

Run: `npm run dev`
Expected: server starts at `http://localhost:3000`.

- [ ] **Step 2: Test the form end-to-end (consent CHECKED)**

1. Navigate to `http://localhost:3000/contacto`.
2. Scroll to the new "Envíanos un Mensaje" section.
3. Fill in: name "Diego Test", email `diego+test@example.com`, phone `7875551234`, message "Quiero información sobre tratamientos de medicina regenerativa.", **check** the SMS consent box.
4. Submit.

Expected:
- Button shows spinner.
- After ~1–2 seconds, the form is replaced with a green "¡Mensaje enviado!" card.
- The recipient inbox receives an email. Subject contains "SMS consent: SÍ". Body contains the TCR Audit Block with `SMS consent: SÍ`, the timestamps, the IP (likely `::1` or `unknown` locally), and the full consent text verbatim.

- [ ] **Step 3: Test the form end-to-end (consent UNCHECKED)**

Repeat step 2, but **leave the SMS consent box unchecked**.

Expected:
- Form submits successfully.
- Email subject contains "SMS consent: NO".
- TCR Audit Block shows `SMS consent: NO`.

- [ ] **Step 4: Test rate limit**

Submit the form 4 times quickly from the same browser session.

Expected:
- First 3 submissions succeed.
- 4th submission shows the red error banner: "Has enviado varios mensajes recientemente..."

(Note: if rate limit doesn't trigger because dev mode reloads modules, this is acceptable — verify in the deployed environment instead.)

- [ ] **Step 5: Test invalid input rejection**

- Try submitting with name "A" (too short) → submit button should be disabled.
- Try email "notanemail" → submit button should be disabled.
- Try phone "12345" → submit button should be disabled, and an inline error reads "Ingresa un número de 10 dígitos."

- [ ] **Step 6: Verify privacy policy update**

1. Navigate to `http://localhost:3000/privacidad`.
2. Confirm the "Última actualización" line reads "Mayo 7, 2026".
3. Scroll to section 11. Confirm sub-section **11.3 Comunicaciones vía SMS** appears after 11.2 with the exact Spanish text.
4. Toggle the language to **English**. Confirm the date reads "May 7, 2026" and section 11.3 now reads "11.3 SMS Communications" with the English text.
5. Toggle back to **Spanish**. Confirm everything is correct.

- [ ] **Step 7: Visual review at mobile breakpoint**

1. Open browser dev tools, set viewport to 375px wide.
2. Navigate to `/contacto`. Confirm the form section renders cleanly: fields stack, consent checkbox label wraps without overflow, button is full-width.
3. Navigate to `/privacidad`. Confirm 11.3 renders cleanly at 375px.

- [ ] **Step 8: Verify privacy/terms links from consent label**

1. On `/contacto`, click "Política de Privacidad" inside the consent label → opens `/privacidad`.
2. Go back. Click "Términos de Uso" → opens `/terminos`.

- [ ] **Step 9: Stop dev server**

Ctrl+C in the terminal running `npm run dev`.

---

## Out of scope / explicit deferrals

Per the spec, the following are explicitly NOT in this plan:

- Automated test framework setup.
- Database persistence of submissions.
- SMS sending itself.
- Cloudflare Turnstile or other CAPTCHA.
- A dedicated `/agendar-cita` page.
- Bilingual form UI (Spanish only).
