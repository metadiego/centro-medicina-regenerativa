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
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '-9999px',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
          }}
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
              Acepto recibir mensajes de texto (SMS) de Centro de Medicina Regenerativa sobre
              recordatorios de citas, confirmaciones, cambios de horario, ubicación de las oficinas,
              promociones y notificaciones. La frecuencia de los mensajes varía. Pueden aplicar
              tarifas estándar de mensajes y datos. Responde <strong>STOP</strong> para cancelar la
              suscripción en cualquier momento o <strong>HELP</strong> para obtener ayuda. Consulte
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
