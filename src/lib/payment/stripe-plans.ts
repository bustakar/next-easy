export const stripePlans = [
  {
    name: 'Basic', // the name of the plan, it'll be automatically lower cased when stored in the database
    priceId: 'price_1SE5bYPkExVIvWhfmmlzM2nE', // the price ID from stripe
    price: 4.99,
    annualDiscountPriceId: 'price_1234567890', // (optional) the price ID for annual billing with a discount
    limits: {
      projects: 5,
      storage: 10,
    },
    descriotions: [
      'Basic Analytics Dashboard',
      '5GB Cloud Storage',
      'Email and Chat Support',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    priceId: 'price_1SE5gwPkExVIvWhfbsg4LLxw',
    price: 9.99,
    limits: {
      projects: 20,
      storage: 50,
    },
    freeTrial: {
      days: 14,
    },
    descriotions: [
      'Everything in Basic Plan',
      '5GB Cloud Storage',
      'Email and Chat Support',
      'Access to Community Forum',
      'Single User Access',
      'Access to Basic Templates',
      'Mobile App Access',
      '1 Custom Report Per Month',
      'Monthly Product Updates',
      'Standard Security Features',
    ],
    isPopular: true,
  },
  {
    name: 'Lifetime',
    priceId: 'price_1SE5hQPkExVIvWhfJTyZfhbZ',
    price: 119.99,
    descriotions: ['Everything in Pro Plan', 'Lifetime access to all features'],
    isPopular: false,
  },
];
