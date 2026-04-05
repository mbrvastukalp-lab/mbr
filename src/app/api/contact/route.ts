import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure your email service here
    // Note: In production, these should be in .env.local
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send email to company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'mbrvastukalp@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #111827; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service Interest:</strong> ${service || 'General'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p style="margin-top: 20px;"><strong>Message:</strong></p>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; color: #374151;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #6b7280; text-align: center;">
            This email was sent from the MBR Vastukalp contact form.
          </p>
        </div>
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message - MBR Vastukalp',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #111827;">Thank you for contacting us!</h2>
          <p>Hi ${name},</p>
          <p>We have received your message regarding "<strong>${subject}</strong>" and our team will get back to you within 24 hours.</p>
          <p>If you have any urgent queries, please feel free to call us at +91 98212 82719.</p>
          <br />
          <p>Best regards,<br><strong>MBR Vastukalp Team</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}
