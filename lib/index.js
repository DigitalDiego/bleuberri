import { loadStripe } from '@stripe/stripe-js';

let stripePromise = null;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH);
  }
  return stripePromise;
};

export default getStripe;

export const formatCurrency = (amount = 0, currency = 'USD') =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumIntegerDigits: 2,
  }).format(amount / 100);