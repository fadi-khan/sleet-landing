import { randomUUID } from 'crypto';
import { getResendClient } from '@/lib/server/resend';
import { renderInquiryEmail } from '@/lib/server/emailTemplate';

/**
 * @param {{ idempotencyPrefix: string, subject: string, heading: string, intro?: string, rows: { label: string, value: string }[], replyTo: string }} params
 */
export const sendInquiryEmail = async ({ idempotencyPrefix, subject, heading, intro, rows, replyTo }) => {
  const to = process.env.CONTACT_TO_EMAIL;
  const fromDomain = process.env.RESEND_FROM_DOMAIN;

  if (!to || !fromDomain) {
    throw new Error('Email is not configured: missing CONTACT_TO_EMAIL or RESEND_FROM_DOMAIN');
  }

  const resend = getResendClient();
  const from = `Sleet Logistics  <notifications@${fromDomain}>`;
  const idempotencyKey = `${idempotencyPrefix}/${randomUUID()}`;

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    subject,
    replyTo,
    headers: {
      'Idempotency-Key': idempotencyKey,
    },
    html: renderInquiryEmail({ heading, intro, rows }),
  });

  if (error) {
    throw new Error(error.message || 'Failed to send email');
  }

  return data;
};
