/**
 * Universal Payment Integration Service for India & Global
 * Primary: Razorpay (Instant access in India, UPI, GPay, PhonePe, Cards, Netbanking)
 * Global: Payment Links (Dodo Payments, Lemon Squeezy, Razorpay International)
 */

export type Currency = 'INR' | 'USD';

export interface PriceTier {
  amount: number;
  currencySymbol: string;
  period: string;
}

export const TIER_PRICING: Record<Currency, Record<'seeker' | 'sadhak' | 'patron', PriceTier>> = {
  INR: {
    seeker: { amount: 199, currencySymbol: '₹', period: '/ month' },
    sadhak: { amount: 799, currencySymbol: '₹', period: '/ year' }, // ~₹66/month
    patron: { amount: 2499, currencySymbol: '₹', period: 'one-time' }
  },
  USD: {
    seeker: { amount: 9, currencySymbol: '$', period: '/ month' },
    sadhak: { amount: 49, currencySymbol: '$', period: '/ year' },
    patron: { amount: 149, currencySymbol: '$', period: 'one-time' }
  }
};

export interface PaymentConfig {
  razorpayKeyId?: string;
  paymentLinksINR: {
    seeker: string;
    sadhak: string;
    patron: string;
  };
  paymentLinksUSD: {
    seeker: string;
    sadhak: string;
    patron: string;
  };
}

export const PAYMENT_CONFIG: PaymentConfig = {
  razorpayKeyId: import.meta.env.VITE_RAZORPAY_KEY_ID || '',
  paymentLinksINR: {
    seeker: import.meta.env.VITE_PAYMENT_LINK_SEEKER_INR || 'https://rzp.io/l/seeker-monthly',
    sadhak: import.meta.env.VITE_PAYMENT_LINK_SADHAK_INR || 'https://rzp.io/l/sadhak-annual',
    patron: import.meta.env.VITE_PAYMENT_LINK_PATRON_INR || 'https://rzp.io/l/moksha-patron'
  },
  paymentLinksUSD: {
    seeker: import.meta.env.VITE_PAYMENT_LINK_SEEKER_USD || 'https://checkout.dodopayments.com/buy/seeker',
    sadhak: import.meta.env.VITE_PAYMENT_LINK_SADHAK_USD || 'https://checkout.dodopayments.com/buy/sadhak',
    patron: import.meta.env.VITE_PAYMENT_LINK_PATRON_USD || 'https://checkout.dodopayments.com/buy/patron'
  }
};

/**
 * Loads Razorpay Standard Checkout SDK dynamically
 */
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if ((window as unknown as { Razorpay: unknown }).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

/**
 * Initiates Razorpay Checkout or Payment Link
 */
export const initiatePayment = async (
  tier: 'seeker' | 'sadhak' | 'patron',
  currency: Currency = 'INR',
  discountPercent = 0,
  onSuccess: (paymentId: string) => void,
  onFailure?: (error: string) => void
): Promise<void> => {
  const basePrice = TIER_PRICING[currency][tier].amount;
  const finalPrice = discountPercent > 0 
    ? Math.round(basePrice * (1 - discountPercent / 100))
    : basePrice;

  const keyId = PAYMENT_CONFIG.razorpayKeyId;

  // Case 1: Razorpay Key ID is configured -> Open Razorpay Modal with UPI/Cards/Netbanking
  if (keyId && !keyId.includes('test_sample')) {
    const isLoaded = await loadRazorpayScript();
    if (isLoaded && (window as unknown as { Razorpay: any }).Razorpay) {
      const options = {
        key: keyId,
        amount: finalPrice * 100, // in paise or cents
        currency: currency,
        name: 'The Gita Sanctuary',
        description: `Sacred Patronage: ${tier.toUpperCase()} Membership`,
        image: 'https://api.iconify.design/twemoji:om.svg',
        theme: {
          color: '#D97706'
        },
        handler: (response: { razorpay_payment_id: string }) => {
          onSuccess(response.razorpay_payment_id);
        },
        modal: {
          ondismiss: () => {
            onFailure?.('Payment cancelled');
          }
        }
      };
      const rzp = new (window as unknown as { Razorpay: any }).Razorpay(options);
      rzp.open();
      return;
    }
  }

  // Case 2: Configured Razorpay or Dodo Payment Link
  const links = currency === 'INR' ? PAYMENT_CONFIG.paymentLinksINR : PAYMENT_CONFIG.paymentLinksUSD;
  const targetLink = links[tier];
  const isCustomLink = targetLink && !targetLink.includes('rzp.io/l/seeker-monthly') && !targetLink.includes('dodopayments.com/buy/seeker');

  if (isCustomLink) {
    window.location.href = targetLink;
    return;
  }

  // Case 3: Development / Sandbox Demo simulator
  // Simulates instant UPI / Card success so you can test before adding keys
  const simulatedPaymentId = 'pay_' + Math.random().toString(36).substring(2, 12);
  setTimeout(() => {
    onSuccess(simulatedPaymentId);
  }, 700);
};
