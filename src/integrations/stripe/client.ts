import { loadStripe } from '@stripe/stripe-js';

// Replace the fallback with your actual Stripe Publishable Key once you have your account
export const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder_key_you_must_replace'
);
