import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email to admin
  const adminMailOptions = {
    from: `"Acker Technologies Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New message from ${name}`,
    text: message,
    html: `<p>You have a new message from ${name} (${email}):</p><p>${message}</p>`,
  };

  // Email to user
  const userMailOptions = {
    from: `"Acker Technologies" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'We have received your message',
    text: 'Thank you for contacting us. We will get back to you shortly.',
    html: `<p>Thank you for contacting us. We will get back to you shortly.</p>`,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error sending message' }, { status: 500 });
  }
}
