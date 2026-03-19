import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, firstName, lastName, email, message } = body;

    const contactName = name || `${firstName || ''} ${lastName || ''}`.trim();

    if (!contactName || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // In production, send via Resend/SendGrid
    console.log('Contact form submission:', body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
