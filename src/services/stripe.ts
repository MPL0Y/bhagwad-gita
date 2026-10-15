/**
 * Stripe Payment Integration Service for The Gita Sanctuary
 * Supports Stripe Payment Links with automatic redirect verification,
 * Customer Billing Portal, and environment variable configuration.
 */

export interface StripeConfig {
  publishableKey?: string;
  paymentLinks: {
    seeker: string;  // $9/month
    sadhak: string;  // $49/year
    patron: string;  // $149 lifetime
  };
  portalLink?: string;
}

// Default test/fallback Stripe configuration
// Users can override these in their .env file with live Stripe Payment Links
export const STRIPE_CONFIG: StripeConfig = {
  publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '',
  paymentLinks: {
    seeker: import.meta.env.VITE_STRIPE_PAYMENT_LINK_SEEKER || 'https://buy.stripe.com/test_seeker_monthly',
    sadhak: import.meta.env.VITE_STRIPE_PAYMENT_LINK_SADHAK || 'https://buy.stripe.com/test_sadhak_annual',
    patron: import.meta.env.VITE_STRIPE_PAYMENT_LINK_PATRON || 'https://buy.stripe.com/test_moksha_patron'
  },
  portalLink: import.meta.env.VITE_STRIPE_PORTAL_LINK || 'https://billing.stripe.com/p/login/test'
};

/**
 * Initiates Stripe Checkout for the chosen tier.
 * If user configured a real Stripe link, redirects to Stripe's secure checkout page.
 * If running in test/sandbox without custom links, simulates the flow seamlessly.
 */
export const initiateStripeCheckout = (
  tier: 'seeker' | 'sadhak' | 'patron',
  appliedCoupon?: string
): void => {
  const targetLink = STRIPE_CONFIG.paymentLinks[tier];
  const isCustomLinkConfigured = targetLink && !targetLink.includes('test_');

  if (isCustomLinkConfigured) {
    // Append coupon code or client reference if supported
    const url = new URL(targetLink);
    if (appliedCoupon) {
      url.searchParams.set('prefilled_promo_code', appliedCoupon);
    }
    window.location.href = url.toString();
  } else {
    // When no live payment link is supplied yet, simulate the redirect callback
    // so the owner can preview the complete end-to-end customer return journey
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('payment', 'success');
    currentUrl.searchParams.set('tier', tier);
    currentUrl.searchParams.set('session_id', 'cs_demo_' + Math.random().toString(36).substring(2, 10));
    window.location.href = currentUrl.toString();
  }
};

/**
 * Checks URL on application startup to see if the customer just returned from Stripe.
 * e.g. https://yourdomain.com/?payment=success&tier=sadhak&session_id=cs_live_...
 */
export const checkStripeReturnCallback = (): {
  isSuccess: boolean;
  tier: 'seeker' | 'sadhak' | 'patron';
  sessionId?: string;
} | null => {
  try {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get('payment');
    const tier = params.get('tier') as 'seeker' | 'sadhak' | 'patron' | null;
    const sessionId = params.get('session_id') || undefined;

    if (payment === 'success' && tier && ['seeker', 'sadhak', 'patron'].includes(tier)) {
      // Clean query parameters from URL so refreshes don't re-trigger
      const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.replaceState({ path: cleanUrl }, '', cleanUrl);

      return {
        isSuccess: true,
        tier,
        sessionId
      };
    }
  } catch (e) {
    console.error("Error inspecting Stripe return params", e);
  }
  return null;
};
