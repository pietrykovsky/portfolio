import { NextResponse } from 'next/server';
import sendContactEmail from '@/services/contact';

// Must match the values in messages/*/contact.json -> topicOptions.
const TOPICS = ['offer', 'bug', 'question', 'other'];
const MAX_LENGTHS = { name: 200, email: 254, message: 5000 };

async function verifyRecaptcha(token) {
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

  const response = await fetch(verifyUrl, {
    method: 'POST',
    // URLSearchParams encodes the token so it cannot smuggle in extra form fields.
    body: new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET_KEY, response: token }),
  });
  const data = await response.json();

  return data.success === true;
}

function isValidField(value, maxLength) {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength;
}

export async function POST(request) {
  try {
    const { name, email, topic, message, recaptchaToken } = await request.json();

    // Validate required fields
    if (
      !isValidField(name, MAX_LENGTHS.name) ||
      !isValidField(email, MAX_LENGTHS.email) ||
      !isValidField(message, MAX_LENGTHS.message) ||
      !TOPICS.includes(topic)
    ) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
    }

    // Verify reCAPTCHA
    const isHuman = typeof recaptchaToken === 'string' && await verifyRecaptcha(recaptchaToken);
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
