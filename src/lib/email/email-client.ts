import { Resend } from 'resend';

// Lazy initialization to support CLI tools
let _resend: Resend | null = null;

export function getResend() {
  if (!_resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}
