import { siteConfig } from '@/app/lib/site.js';

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MAX_NAME_LENGTH = 100;
export const MAX_PHONE_LENGTH = 30;
export const MAX_EMAIL_LENGTH = 254;
export const MAX_MESSAGE_LENGTH = 5000;
export const MIN_SUBMIT_MS = 2500;

export function isGraphConfigured() {
  return Boolean(
    process.env.AZURE_TENANT_ID &&
      process.env.AZURE_CLIENT_ID &&
      process.env.AZURE_CLIENT_SECRET,
  );
}

export function isSmtpConfigured() {
  return Boolean(process.env.MAIL_HOST && process.env.MAIL_USER && process.env.MAIL_PASS);
}

function clamp(value, max) {
  return value.slice(0, max);
}

export function parseContactSubmission(body) {
  const firstName = body?.firstName?.trim();
  const lastName = body?.lastName?.trim();
  const phoneNumber = body?.phoneNumber?.trim();
  const email = body?.email?.trim();
  const message = body?.message?.trim();
  const company = body?.company?.trim() ?? '';
  const formStartedAt = Number(body?.formStartedAt);

  if (company) {
    return { isSpam: true };
  }

  if (!firstName || !lastName || !phoneNumber || !email || !message) {
    return { error: 'All fields are required.' };
  }

  if (
    firstName.length > MAX_NAME_LENGTH ||
    lastName.length > MAX_NAME_LENGTH ||
    phoneNumber.length > MAX_PHONE_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return { error: 'One or more fields exceed the allowed length.' };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { error: 'Invalid email address.' };
  }

  if (!Number.isFinite(formStartedAt)) {
    return { error: 'Invalid submission.' };
  }

  const elapsed = Date.now() - formStartedAt;
  if (elapsed < MIN_SUBMIT_MS || elapsed > 1000 * 60 * 60 * 24) {
    return { error: 'Invalid submission.' };
  }

  return {
    data: {
      firstName: clamp(firstName, MAX_NAME_LENGTH),
      lastName: clamp(lastName, MAX_NAME_LENGTH),
      phoneNumber: clamp(phoneNumber, MAX_PHONE_LENGTH),
      email: clamp(email, MAX_EMAIL_LENGTH),
      message: clamp(message, MAX_MESSAGE_LENGTH),
    },
  };
}

function buildEmailContent({ firstName, lastName, phoneNumber, email, message }) {
  return {
    subject: `Contact Form — ${firstName} ${lastName}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phoneNumber}`,
      '',
      'Message:',
      message,
    ].join('\n'),
  };
}

async function getGraphAccessToken() {
  const tenantId = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;

  const response = await fetch(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
      }),
    },
  );

  const payload = await response.json().catch(() => ({}));

  if (!response.ok || !payload.access_token) {
    throw new Error('GRAPH_AUTH_FAILED');
  }

  return payload.access_token;
}

async function sendViaMicrosoftGraph(submission) {
  const sender = process.env.GRAPH_SENDER_EMAIL || siteConfig.email;
  const recipient = process.env.CONTACT_RECIPIENT || siteConfig.email;
  const { subject, text } = buildEmailContent(submission);
  const accessToken = await getGraphAccessToken();

  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: {
          subject,
          body: { contentType: 'Text', content: text },
          toRecipients: [{ emailAddress: { address: recipient } }],
          replyTo: [
            {
              emailAddress: {
                address: submission.email,
                name: `${submission.firstName} ${submission.lastName}`,
              },
            },
          ],
        },
        saveToSentItems: false,
      }),
    },
  );

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    console.error('Microsoft Graph sendMail failed:', response.status, errorBody);
    throw new Error('GRAPH_SEND_FAILED');
  }
}

async function sendViaSmtp(submission) {
  const nodemailer = await import('nodemailer');
  const port = Number(process.env.MAIL_PORT) || 465;
  const { subject, text } = buildEmailContent(submission);
  const recipient = process.env.CONTACT_RECIPIENT || siteConfig.email;

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port,
    secure: process.env.MAIL_SECURE ? process.env.MAIL_SECURE === 'true' : port === 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${siteConfig.name} Contact Form" <${process.env.MAIL_USER}>`,
    to: recipient,
    replyTo: submission.email,
    subject,
    text,
  });
}

export async function sendContactEmail(submission) {
  if (isGraphConfigured()) {
    await sendViaMicrosoftGraph(submission);
    return;
  }

  if (isSmtpConfigured()) {
    await sendViaSmtp(submission);
    return;
  }

  throw new Error('EMAIL_NOT_CONFIGURED');
}
