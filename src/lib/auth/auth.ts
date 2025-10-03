import { db } from '@/lib/db';
import { stripe } from '@better-auth/stripe';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { magicLink } from 'better-auth/plugins';
import { sendMagicLinkEmail } from '../email/send-magic-link';
import { getStripeClient } from '../payment/stripe-client';
import { stripePlans } from '../payment/stripe-plans';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  plugins: [
    nextCookies(),
    magicLink({
      sendMagicLink: async ({ email, token, url }) => {
        await sendMagicLinkEmail({ email, token, url });
      },
    }),
    stripe({
      stripeClient: getStripeClient(),
      stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
      createCustomerOnSignUp: true,
      subscription: {
        enabled: true,
        plans: stripePlans,
      },
    }),
  ],
});
