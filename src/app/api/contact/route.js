import { NextResponse } from 'next/server';
import sendContactEmail from '@/services/contact';
import { rateLimit } from '@/rate-limit';

const limiter = rateLimit({
  interval: 60 * 1000 * 5, // 5 minutes
  uniqueTokenPerInterval: 500, // Max 500 users per minute
});

async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

  const response = await fetch(verifyUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`
  });
  const data = await response.json();

  return data.success;
}

export async function POST(request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const { isRateLimited, remainingTime } = await limiter.check(ip);

    if (isRateLimited) {
      return NextResponse.json({ 
        success: false, 
        message: `${Math.ceil(remainingTime / 1000)}` 
      }, { status: 429 });
    }

    const { name, email, topic, message, recaptchaToken } = await request.json();
    
    // Validate required fields
    if (!name || !email || !topic || !message) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
    }

    // Verify reCAPTCHA
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json({ success: false, message: 'reCAPTCHA verification failed.' }, { status: 400 });
    }

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