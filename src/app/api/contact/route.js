import { NextResponse } from 'next/server';
import { sendInquiryEmail } from '@/lib/server/sendInquiryEmail';

const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0;

export async function POST(req) {
  let payload;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const requiredFields = ['name', 'email', 'message'];
  for (const field of requiredFields) {
    if (!isNonEmptyString(payload?.[field])) {
      return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
    }
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const message = payload.message.trim();
  const phone = isNonEmptyString(payload.phone) ? payload.phone.trim() : '';
  const companyName = isNonEmptyString(payload.companyName) ? payload.companyName.trim() : '';
  const serviceOfInterest = isNonEmptyString(payload.serviceOfInterest) ? payload.serviceOfInterest.trim() : '';

  try {
    const data = await sendInquiryEmail({
      idempotencyPrefix: 'contact-form',
      subject: `New Client Query from ${name}`,
      heading: 'New Contact Form Message',
      intro: 'A visitor submitted the contact form on the Sleet Logistics website.',
      replyTo: email,
      rows: [
        { label: 'Name', value: name },
        { label: 'Company', value: companyName },
        { label: 'Email', value: email },
        { label: 'Phone', value: phone },
        { label: 'Service of Interest', value: serviceOfInterest },
        { label: 'Message', value: message },
      ],
    });

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return NextResponse.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
  }
}
