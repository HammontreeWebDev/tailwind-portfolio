import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    // Parse the JSON body of the request
    const { firstName, lastName, phoneNumber, email, message } = await req.json();

    try {
        // Set up the mail transport configuration
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: true, // Use secure connection (SSL/TLS)
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,  // Replace with your desired recipient email
            replyTo: email,
            subject: `Contact Form Submission - ${firstName} ${lastName}`,
            text: `
            First Name: ${firstName}
            Last Name: ${lastName}
            Phone Number: ${phoneNumber}
            Email: ${email}
            Message:
            ${message}
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Return a successful response
        return NextResponse.json({ message: 'Email Sent' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
