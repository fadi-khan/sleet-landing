import { Resend } from 'resend';

let client = null;

export const getResendClient = () => {
  if (client) return client;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY environment variable');
  }

  client = new Resend(apiKey);
  return client;
};
