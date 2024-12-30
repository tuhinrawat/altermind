import { NextResponse } from 'next/server';
import { sendEmail, formatDemoRequestEmail } from '../../utils/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Send email
    const emailContent = formatDemoRequestEmail(data);
    const result = await sendEmail('New Demo Request from AlterMindAI', emailContent);
    
    if (!result.success) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ message: 'Demo request received successfully' });
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Failed to process demo request' },
      { status: 500 }
    );
  }
} 