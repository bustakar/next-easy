'use client';

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth/auth-client';
import { CreditCard } from 'lucide-react';
import { redirect } from 'next/navigation';

export async function ButtonBilling() {
  const { data: subscriptions, error } = await authClient.subscription.list();
  const activeSubscription = subscriptions?.find(
    (sub) => sub.status === 'active' || sub.status === 'trialing'
  );

  const openBilling = async () => {
    const result = await authClient.subscription.billingPortal({
      referenceId: activeSubscription?.id,
      returnUrl: '/dashboard',
    });

    if (result.data?.url) {
      redirect(result.data.url);
    }
  };

  return (
    <Button asChild variant="default" size="sm" onClick={() => openBilling()}>
      <CreditCard />
      Billing
    </Button>
  );
}
