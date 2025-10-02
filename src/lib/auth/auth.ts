import { db } from '@/lib/db';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { magicLink } from 'better-auth/plugins';
import { sendMagicLinkEmail } from '../email/send-magic-link';

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
  ],
});
