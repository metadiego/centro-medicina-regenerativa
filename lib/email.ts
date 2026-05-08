type SendEmailParams = {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
};

type TwilioEmailBody = {
  from: { address: string };
  to: { address: string }[];
  content: {
    subject: string;
    html: string;
    text: string;
    headers?: Record<string, string>;
  };
};

export async function sendEmail(params: SendEmailParams): Promise<void> {
  const username = process.env.TWILIO_ACCOUNT_SID;
  const password = process.env.TWILIO_AUTH_TOKEN;
  if (!username || !password) {
    throw new Error('TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN is not set');
  }

  const auth = Buffer.from(`${username}:${password}`).toString('base64');

  const body: TwilioEmailBody = {
    from: { address: params.from },
    to: [{ address: params.to }],
    content: {
      subject: params.subject,
      html: params.html,
      text: params.text,
    },
  };

  if (params.replyTo) {
    body.content.headers = { 'Reply-To': params.replyTo };
  }

  const response = await fetch('https://comms.twilio.com/v1/Emails', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Twilio email send failed: ${response.status} ${errorBody}`);
  }
}
