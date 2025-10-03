import { MagicLinkEmail } from '@/components/email/magic-link-template';
import { getResend } from './email-client';

export const sendMagicLinkEmail = async ({
  email,
  url,
}: {
  email: string;
  token: string;
  url: string;
}) => {
  try {
    const resend = getResend();

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: [email],
      subject: 'Sign in to Next Easy',
      react: MagicLinkEmail({ url, userEmail: email }),
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error('Failed to send magic link email');
    }

    return data;
  } catch (error) {
    console.error('Error sending magic link email:', error);
    throw error;
  }
};
