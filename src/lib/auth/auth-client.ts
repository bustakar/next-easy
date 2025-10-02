import { magicLinkClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react'; // Use React client for hooks

export const authClient = createAuthClient({
  plugins: [magicLinkClient()],
});

export const { signIn, signUp, useSession } = authClient;
