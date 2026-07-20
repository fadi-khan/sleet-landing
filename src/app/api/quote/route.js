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

  const requiredFields = ['name', 'email', 'phone', 'city', 'type', 'incoter'];
  for (const field of requiredFields) {
    if (!isNonEmptyString(payload?.[field])) {
      return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
    }
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const phone = payload.phone.trim();
  const city = payload.city.trim();
  const type = payload.type.trim();
  const incoter = payload.incoter.trim();
  const extras = [
    payload.fragile ? 'Fragile' : null,
    payload.express ? 'Express delivery' : null,
    payload.insurance ? 'Insurance' : null,
  ].filter(Boolean);

  try {
    const data = await sendInquiryEmail({
      idempotencyPrefix: 'quote-form',
      subject: `New Quote Request from ${name}`,
      heading: 'New Quote Request',
      intro: 'A visitor requested a shipping quote on the Sleet Logistics website.',
      replyTo: email,
      rows: [
        { label: 'Name', value: name },
        { label: 'Email', value: email },
        { label: 'Phone', value: phone },
        { label: 'Delivery City', value: city },
        { label: 'Freight Type', value: type },
        { label: 'Incoterms', value: incoter },
        { label: 'Add-ons', value: extras.join(', ') },
      ],
    });

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    console.error('Failed to send quote email:', error);
    return NextResponse.json({ error: 'Failed to send quote request. Please try again later.' }, { status: 500 });
  }
}
