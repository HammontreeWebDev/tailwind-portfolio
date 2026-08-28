import { NextResponse } from 'next/server';
import { parseContactSubmission, sendContactEmail } from '@/app/lib/contactEmail.js';

export async function POST(req) {
  let body;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = parseContactSubmission(body);

  if (parsed.isSpam) {
    return NextResponse.json({ message: 'Email sent successfully.' }, { status: 200 });
  }

  if (parsed.error) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ message: 'Email sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);

    if (error.message === 'GRAPH_NOT_CONFIGURED') {
      console.error(
        'Microsoft Graph is not configured. Set AZURE_TENANT_ID, AZURE_CLIENT_ID, and AZURE_CLIENT_SECRET in Vercel, then remove legacy MAIL_* variables.',
      );
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 });
    }

    if (error.message === 'SMTP_NOT_CONFIGURED') {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 });
    }

    if (error.message === 'GRAPH_AUTH_FAILED') {
      return NextResponse.json({ error: 'Email service authentication failed.' }, { status: 503 });
    }

    if (error.message === 'GRAPH_SEND_FAILED') {
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
