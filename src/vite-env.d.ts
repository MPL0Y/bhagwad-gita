/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAZORPAY_KEY_ID?: string;
  readonly VITE_PAYMENT_LINK_SEEKER_INR?: string;
  readonly VITE_PAYMENT_LINK_SADHAK_INR?: string;
  readonly VITE_PAYMENT_LINK_PATRON_INR?: string;
  readonly VITE_PAYMENT_LINK_SEEKER_USD?: string;
  readonly VITE_PAYMENT_LINK_SADHAK_USD?: string;
  readonly VITE_PAYMENT_LINK_PATRON_USD?: string;
  readonly VITE_STRIPE_PAYMENT_LINK_SEEKER?: string;
  readonly VITE_STRIPE_PAYMENT_LINK_SADHAK?: string;
  readonly VITE_STRIPE_PAYMENT_LINK_PATRON?: string;
  readonly VITE_STRIPE_PORTAL_LINK?: string;
  readonly VITE_STRIPE_PUBLISHABLE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
