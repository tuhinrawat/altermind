import { NextResponse } from 'next/server';
import { sendEmail, formatContactEmail } from '../../utils/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    const emailContent = formatContactEmail({
      name,
      email,
      message: `${company ? `Company: ${company}\n\n` : ''}${message}`
    });

    const result = await sendEmail('New Contact Form Submission', emailContent);

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 