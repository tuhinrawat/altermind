import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Subscriber from '@/models/Subscriber';
import { Error as MongooseError } from 'mongoose';

interface MongoError extends Error {
  code?: number;
}

export async function GET() {
  try {
    console.log('Connecting to database to fetch subscribers...');
    await connectToDatabase();
    
    const subscribers = await Subscriber.find({}).sort({ subscribedAt: -1 });
    console.log('Found subscribers:', subscribers);
    
    return NextResponse.json(subscribers);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log('Starting subscription process...');
    const { email } = await request.json();

    if (!email) {
      console.log('No email provided');
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    console.log('Connecting to database...');
    await connectToDatabase();
    console.log('Connected to database');

    console.log('Creating subscriber with email:', email);
    const subscriber = await Subscriber.create({ email });
    console.log('Subscriber created:', subscriber);

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in subscription process:', error);

    // Handle duplicate email error
    if ((error as MongoError).code === 11000) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Handle validation errors
    if (error instanceof MongooseError.ValidationError) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
} 