import { config } from 'dotenv';
import Stripe from 'stripe';

config({ path: '.env.local' });

let stripeClient: Stripe | null = null;

export const getStripeClient = () => {
  if (!stripeClient) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY environment variable is not set');
    }
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-08-27.basil',
    });
  }
  return stripeClient;
};
