import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { stripePlans } from '@/lib/payment/stripe-plans';
import { Check } from 'lucide-react';
import { ButtonCheckout } from '../../../components/pricing/button-checkout';

export default function PricingPaywall() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-4 md:flex-row py-4">
      {stripePlans.map((plan, index) => (
        <Card
          key={plan.name}
          className={`flex flex-col h-full ${plan.isPopular ? 'relative border-primary' : ''}`}
        >
          {plan.isPopular && (
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              Popular
            </span>
          )}

          <CardHeader className="text-center">
            <CardTitle className="font-medium text-lg">{plan.name}</CardTitle>
            <div className="mt-2">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-muted-foreground ml-1">/ mo</span>
            </div>
          </CardHeader>

          <CardContent>
            <ul className="space-y-3 text-sm">
              {plan.descriotions?.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span className="text-left">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter>
            <ButtonCheckout
              plan={plan.name.toLowerCase()}
              variant={plan.isPopular ? 'default' : 'outline'}
              title="Start 14-day free trial"
            />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
