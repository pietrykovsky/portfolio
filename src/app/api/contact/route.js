import { NextResponse } from 'next/server';
import sendContactEmail from '@/services/contact';

export async function POST(request) {
  try {
    const { name, email, topic, message } = await request.json();
    const result = await sendContactEmail(name, email, topic, message);
    
    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 500 });
    }
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}