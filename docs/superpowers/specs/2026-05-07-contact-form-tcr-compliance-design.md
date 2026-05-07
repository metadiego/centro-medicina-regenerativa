# Contact Form with TCR-Compliant SMS Consent — Design

**Date:** 2026-05-07
**Status:** Approved (in-conversation)
**Scope:** Add a contact/appointment-request form to `/contacto` with explicit SMS consent capture, plus update the privacy policy with a TCR-required SMS communications disclosure.

---

## Goals

1. Capture appointment-request leads via a web form (currently the page only offers a phone CTA).
2. Capture **TCR-defensible SMS consent** at the point of phone-number collection, with the exact CTIA-aligned disclosure text.
3. Update `/privacidad` with the SMS data-handling disclosure that TCR auditors verify.

## Non-goals

- Sending the SMS messages themselves (separate system).
- Database persistence of submissions (email-only audit trail; revisit if volume grows).
- Bilingual form UI (Spanish only — matches the rest of the site).
- Automated tests (project has no test framework; manual QA only).
- A separate `/agendar-cita` page (form lives on `/contacto`).

---

## Architecture

```
[ContactForm.tsx (client)]
   ↓ submit
[Server Action: submitContact]
   ↓ ① honeypot check
   ↓ ② server-side validation
   ↓ ③ rate limit (3 submissions / 10 min / IP, in-memory)
   ↓ ④ build email (HTML + text, with TCR audit block)
   ↓ ⑤ send via SendGrid REST API (fetch — no SDK)
   ↓
[atencion@centrodemedicinaregenerativa.com]
```

**Why server action over API route:** Next 15 idiomatic, no separate route file, types flow end-to-end, automatic CSRF protection.

**Why SendGrid via `fetch` (not the `@sendgrid/mail` SDK):** Single API call doesn't justify a 1MB+ dependency. Keeps the bundle lean.

**Why in-memory rate limit (not Redis/Vercel KV):** Acceptable for a low-volume contact form. Cold starts reset state — that's a known trade-off, not a defect.

### File layout

| File | Purpose |
|---|---|
| `components/ContactForm.tsx` | Client component: form UI, state, client-side validation, submit handling |
| `app/actions/submit-contact.ts` | Server action: honeypot, validation, rate limit, email send |
| `lib/sendgrid.ts` | Thin SendGrid REST wrapper (one `fetch` call) |
| `lib/rate-limit.ts` | In-memory IP rate limiter (`Map<ip, timestamps[]>` with TTL) |
| `lib/contact-email.ts` | Email subject/HTML/text builder, including the TCR audit block |
| `app/contacto/page.tsx` | Edit: insert `<ContactForm />` as a new section |
| `app/privacidad/page.tsx` | Edit: add bilingual section 11.3 + bump "Última actualización" |

---

## Form UI

### Placement

New section on `/contacto`, inserted **between** the existing "Contact Form & Hours" section (the "Llama Ahora" CTA) and the "Newsletter Subscription" section. White card on the gray background, matching the existing visual rhythm.

### Section header

> **Envíanos un Mensaje**
> Completa el formulario y te contactaremos a la brevedad.

### Fields

| Field | Type | Validation |
|---|---|---|
| Nombre completo | `text` | required, 2–100 chars, trim |
| Email | `email` | required, RFC-ish regex, ≤254 chars |
| Número de teléfono móvil | `tel` | required, masked input `(XXX) XXX-XXXX`, normalized to E.164 (`+1XXXXXXXXXX`) on submit |
| Mensaje / motivo de consulta | `textarea` (4 rows) | required, 10–2000 chars; char counter shown after 1500 |
| Honeypot field (`website`) | `text`, visually hidden | must be empty |
| SMS consent checkbox | `checkbox`, **NOT pre-checked**, **NOT required** | state recorded either way |

### SMS consent checkbox label (exact)

> Acepto recibir mensajes de texto (SMS) de Centro de Medicina Regenerativa sobre recordatorios de citas, confirmaciones, cambios de horario, ubicación de las oficinas, promociones y notificaciones. La frecuencia de los mensajes varía. Pueden aplicar tarifas estándar de mensajes y datos. Responde STOP para cancelar la suscripción en cualquier momento o HELP para obtener ayuda. Consulte nuestra [Política de Privacidad](/privacidad) y [Términos de Uso](/terminos).

### Why the checkbox is NOT required

TCR/CTIA rules treat SMS consent as opt-in. Gating form submission on it would be a dark pattern and TCR-noncompliant. Users can request a consultation without opting into SMS. The submission email records:

- whether the box was checked,
- the **exact consent text** the user saw,
- the timestamp.

That is what an auditor needs.

### Submission UX states

| State | Behavior |
|---|---|
| `idle` | Form visible, button enabled |
| `submitting` | Button disabled with spinner, all fields disabled |
| `success` | Form replaced with green confirmation card: "Mensaje enviado. Te contactaremos pronto." + "Enviar otro mensaje" button |
| `error` | Red banner above form: "No pudimos enviar tu mensaje. Por favor llámanos al +1 (787) 780-7575 o intenta nuevamente." Form remains filled. |

### Tracking

`trackEvent('contact_form_submitted', { sms_consent: boolean })` on success — consistent with the existing `trackEvent` pattern in `lib/utils.ts`.

---

## Server action

### Input shape

```ts
type ContactSubmission = {
  name: string;
  email: string;
  phone: string;             // already normalized client-side to +1XXXXXXXXXX
  message: string;
  smsConsent: boolean;
  consentTextShown: string;  // exact label the user saw — captured from the DOM
  honeypot: string;          // must be ""
};
```

### Pipeline

1. **Honeypot check** — if `honeypot !== ""`, return `{ ok: true }` (lie to the bot, log nothing, send nothing).
2. **Server-side validation** — re-validate every field. Return `{ ok: false, error: "validation" }` on failure.
3. **Rate limit** — read client IP from `headers()` (`x-forwarded-for` first segment, fallback `x-real-ip`, fallback `"unknown"`). Reject if >3 submissions in last 10 min from the same IP. Return `{ ok: false, error: "rate_limit" }`.
4. **Build email** — `buildContactEmail(submission, metadata)`.
5. **Send via SendGrid** — `await sendEmail(...)`. On non-2xx, log to `console.error` and return `{ ok: false, error: "send_failed" }`.
6. **Success** — return `{ ok: true }`.

### Captured metadata (TCR audit block in email)

- `submittedAt` — ISO 8601 UTC + Puerto Rico local time (`America/Puerto_Rico`)
- `ip` — best-effort from request headers
- `userAgent` — from `headers().get('user-agent')`
- `referer` — for source attribution
- `consentTextShown` — exact text the user saw next to the checkbox
- `smsConsent` — `true` / `false`

### Email format

| Field | Value |
|---|---|
| **To** | `CONTACT_RECIPIENT_EMAIL` env var (no default — server action throws on missing) |
| **From** | `CONTACT_FROM_EMAIL` env var, must be SendGrid-verified sender (no default — server action throws on missing) |
| **Reply-To** | The patient's email |
| **Subject** | `Nuevo contacto: {name} — SMS consent: {SÍ\|NO}` |
| **Body** | HTML + plain-text alternative. All form fields, then a clearly delimited **TCR Audit Block** at the bottom with metadata above. |

### Env vars

```
SENDGRID_API_KEY=...
CONTACT_RECIPIENT_EMAIL=atencion@centrodemedicinaregenerativa.com
CONTACT_FROM_EMAIL=no-reply@centrodemedicinaregenerativa.com
```

### Out-of-code prerequisites

1. SendGrid account with API key.
2. Verified sender — single-sender verification of `no-reply@centrodemedicinaregenerativa.com`, OR domain authentication (SPF/DKIM/DMARC) on `centrodemedicinaregenerativa.com` (recommended).
3. Add the three env vars in Vercel project settings (and `.env.local` for dev).

---

## Privacy policy update

### Where

Insert as new sub-section **11.3 Comunicaciones vía SMS** within the existing section 11 ("Comunicaciones y Consentimiento"), after 11.2 ("Comunicaciones Comerciales"). Adding in-place avoids renumbering sections 12–18.

### Spanish text (exact, as provided)

> **11.3 Comunicaciones vía SMS**
>
> La información de teléfonos móviles y el consentimiento de SMS recopilados a través de nuestros formularios NO serán compartidos, vendidos ni divulgados con terceros para fines de marketing. Los datos solo se utilizan para las comunicaciones autorizadas por el usuario. Para cancelar la suscripción, responda STOP a cualquier mensaje. Para obtener ayuda, responda HELP.

### English text (faithful translation, TCR-aligned)

> **11.3 SMS Communications**
>
> The mobile phone information and SMS consent collected through our forms will NOT be shared, sold, or disclosed to third parties for marketing purposes. The data is used only for the communications authorized by the user. To unsubscribe, reply STOP to any message. For help, reply HELP.

### Implementation

Same `language === 'es' ? ... : ...` pattern used throughout the existing privacy policy. Single paragraph (not a bullet list) — content reads as one statement. Styled identically to other 11.x sub-sections (h3 heading + paragraph).

### Date bump

`Última actualización: Abril 22, 2025` → `Mayo 7, 2026`
`Last updated: April 22, 2025` → `May 7, 2026`

---

## Error handling & edge cases

### Client errors

| Server response | UI message |
|---|---|
| `rate_limit` | "Has enviado varios mensajes recientemente. Por favor llámanos al +1 (787) 780-7575 si es urgente." |
| `send_failed` | "No pudimos enviar tu mensaje. Por favor llámanos al +1 (787) 780-7575 o intenta nuevamente." |
| `validation` | "Por favor revisa los campos del formulario." (Generic — server-side validation failure means client validation was bypassed, likely an attacker; we don't disclose which field.) |
| Network/timeout (try/catch) | Same as `send_failed`. |

### Edge cases

- **User submits without checking SMS consent** → form goes through, email records `SMS consent: NO`, no SMS contract implied.
- **Honeypot bypass attempt** → field is `position: absolute; left: -9999px;` plus `tabIndex={-1}` plus `autoComplete="off"` plus `aria-hidden="true"` so screen readers and tab navigation skip it.
- **Phone format variations** → client accepts `(787) 555-0100`, `787-555-0100`, `7875550100`, `+17875550100`. Normalized to `+17875550100` before submit. Server re-validates the normalized form.
- **Long messages** → 2000 char hard cap, char counter shown after 1500 chars.
- **Double-submit** → button disabled during `submitting` + server rate limit catches anyway.
- **SendGrid transient failure** → no retry. User sees error and phone fallback. Avoids duplicate emails.
- **IP behind proxy** → read `x-forwarded-for` (first segment), fallback `x-real-ip`, fallback `"unknown"`. Rate limit still works on `"unknown"` bucket — degraded but safe.

---

## Manual test plan

1. Submit valid form **with consent checked** → email received, body shows "SMS consent: SÍ", consent text printed verbatim, all metadata present.
2. Submit valid form **without consent** → email received, body shows "SMS consent: NO".
3. Submit with **honeypot filled** → no email sent, UI shows success (we lie to bots).
4. Submit **4 times in 10 min** from the same IP → 4th shows rate-limit error.
5. Submit with **invalid email** → client-side error, no server call.
6. Submit with **bad phone format** → client-side error, no server call.
7. **Toggle EN** on `/privacidad` → new 11.3 section visible in English. Toggle ES → Spanish version visible. Date updated in both.
8. **Visual review** on mobile (375px) and desktop (1440px) — form section matches existing card style.
9. `npm run build` → no TS or lint errors.
10. **Click privacy/terms links** in consent label → navigate to `/privacidad` and `/terminos` (terms page exists per repo structure).

---

## Open items / explicit deferrals

- **No automated tests.** Project has no test framework. Manual QA covers the surface area.
- **No DB persistence.** Email is the audit log. Revisit if TCR pushes back or volume grows.
- **No SMS sending.** This work captures consent only.
- **No Cloudflare Turnstile.** Honeypot + rate limit is the launch posture; add Turnstile later if spam appears.
