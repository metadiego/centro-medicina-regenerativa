type SendEmailParams = {
  to: string;
  from: string;
  fromName?: string;
  subject: string;
  html: string;
  text?: string;
};

type TwilioEmailBody = {
  from: { address: string; name?: string };
  to: { address: string }[];
  content: {
    subject: string;
    html: string;
    text?: string;
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
    },
  };

  if (params.fromName) {
    body.from.name = params.fromName;
  }
  if (params.text) {
    body.content.text = params.text;
  }

  console.log('[email] sending to Twilio', {
    endpoint: 'https://comms.twilio.com/v1/Emails',
    from: body.from,
    to: body.to,
    subject: body.content.subject,
  });

  const response = await fetch('https://comms.twilio.com/v1/Emails', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const responseText = await response.text();

  if (!response.ok) {
    console.error('[email] Twilio rejected send', {
      status: response.status,
      body: responseText,
    });
    throw new Error(`Twilio email send failed: ${response.status} ${responseText}`);
  }

  console.log('[email] Twilio accepted send', {
    status: response.status,
    body: responseText,
  });
}
