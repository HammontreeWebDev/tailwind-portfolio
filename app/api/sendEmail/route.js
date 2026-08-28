import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { siteConfig } from '@/app/lib/site.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function createMailTransporter() {
  const host = process.env.MAIL_HOST;
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;
  const port = Number(process.env.MAIL_PORT) || 465;

  if (!host || !user || !pass) {
    throw new Error('MAIL_NOT_CONFIGURED');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.MAIL_SECURE ? process.env.MAIL_SECURE === 'true' : port === 465,
    auth: { user, pass },
  });
}

export async function POST(req) {
  let body;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const firstName = body.firstName?.trim();
  const lastName = body.lastName?.trim();
  const phoneNumber = body.phoneNumber?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!firstName || !lastName || !phoneNumber || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  try {
    const transporter = createMailTransporter();
    const recipient = process.env.CONTACT_RECIPIENT || siteConfig.email;

    await transporter.sendMail({
      from: `"${siteConfig.name} Contact Form" <${process.env.MAIL_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `Contact Form — ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phoneNumber}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    return NextResponse.json({ message: 'Email sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);

    if (error.message === 'MAIL_NOT_CONFIGURED') {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 });
    }

    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
