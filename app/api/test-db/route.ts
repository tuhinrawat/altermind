import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET() {
  try {
    // Check if we're already connected
    if (mongoose.connection.readyState === 1) {
      return NextResponse.json({ 
        status: 'Connected', 
        message: 'Already connected to MongoDB',
        database: mongoose.connection.db?.databaseName || 'unknown'
      });
    }

    // Try to connect
    await mongoose.connect(process.env.MONGODB_URI!);
    
    return NextResponse.json({ 
      status: 'Success', 
      message: 'Successfully connected to MongoDB',
      database: mongoose.connection.db?.databaseName || 'unknown'
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json(
      { 
        status: 'Error', 
        message: 'Failed to connect to MongoDB',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 