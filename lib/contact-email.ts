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
