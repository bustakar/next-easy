'use client';

import { Button } from '@/components/ui/button';
import { authClient, useSession } from '@/lib/auth/auth-client';
import { Loader2 } from 'lucide-react';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { Skeleton } from '../ui/skeleton';

export function ButtonCheckout({
  plan,
  variant,
}: {
  plan: string;
  variant?: 'default' | 'outline';
}) {
  const { data: session, isPending } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const checkout = async () => {
    if (!session) {
      redirect('/login');
    }

    setIsLoading(true);

    try {
      const { data: subscriptions } = await authClient.subscription.list();
      const subscriptionId = subscriptions?.find(
        (sub) => sub.status === 'active' || sub.status === 'trialing'
      )?.id;
      const result = await authClient.subscription.upgrade({
        plan,
        subscriptionId,
        successUrl: '/dashboard',
        cancelUrl: '/pricing',
        returnUrl: '/pricing',
      });

      if (result.data?.url) {
        redirect(result.data.url);
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isPending) {
    return (
      <Button variant={variant} className="w-full" disabled>
        <Skeleton className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      className="w-full"
      onClick={() => checkout()}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        'Get started for free'
      )}
    </Button>
  );
}
