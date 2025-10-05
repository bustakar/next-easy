import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { stripePlans } from '@/lib/payment/stripe-plans';
import { Check } from 'lucide-react';
import { ButtonCheckout } from '../../components/pricing/button-checkout';

export default function Pricing() {
  const isPopularPlan = (name: string) => {
    return name === 'pro';
  };

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Pricing that Scales with You
          </h1>
          <p>
            Gemini is evolving to be more than just the models. It supports an
            entire to the APIs and platforms helping developers and businesses
            innovate.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {stripePlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${isPopularPlan(plan.name) ? 'relative' : ''}`}
            >
              {isPopularPlan(plan.name) && (
                <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                  Popular
                </span>
              )}

              <CardHeader>
                <CardTitle className="font-medium">{plan.name}</CardTitle>
                <span className="my-3 block text-2xl font-semibold">
                  ${plan.price} / mo
                </span>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />

                <ul className="list-outside space-y-3 text-sm">
                  {plan.descriotions?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <ButtonCheckout plan={plan.name} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
