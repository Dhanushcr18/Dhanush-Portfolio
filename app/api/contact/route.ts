import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Here you can integrate with email services like:
    // - SendGrid
    // - Nodemailer
    // - Resend
    // - EmailJS
    // For now, we'll log to console and save to a file

    const timestamp = new Date().toISOString();
    const contactData = {
      name,
      email,
      message,
      timestamp,
    };

    console.log('\n========================================');
    console.log('📧 NEW CONTACT FORM SUBMISSION');
    console.log('========================================');
    console.log('From:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Time:', timestamp);
    console.log('========================================\n');

    // TODO: Set up EmailJS to forward these to dhadhanush.234@gmail.com
    // For now, messages are logged here and you can check the terminal

    return NextResponse.json(
      {
        success: true,
        message: 'Message received! Check your terminal/console for the details. To receive emails, set up EmailJS following EMAILJS_SETUP.md',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
