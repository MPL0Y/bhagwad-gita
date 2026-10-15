import React, { useState } from 'react';
import { UserSadhana } from '../types/gita';
import { 
  X, 
  Crown, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Gift, 
  Flame, 
  BookOpen, 
  Volume2, 
  Smartphone, 
  FileText,
  CreditCard,
  QrCode,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Currency, TIER_PRICING, initiatePayment } from '../services/payment';

interface ProMonetizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  sadhana: UserSadhana;
  onUpgradeSuccess: (tier: 'seeker' | 'sadhak' | 'patron') => void;
}

export const ProMonetizationModal: React.FC<ProMonetizationModalProps> = ({
  isOpen,
  onClose,
  sadhana,
  onUpgradeSuccess
}) => {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [selectedTier, setSelectedTier] = useState<'seeker' | 'sadhak' | 'patron'>('sadhak');
  const [couponCode, setCouponCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [couponApplied, setCouponApplied] = useState<boolean>(false);
  const [couponError, setCouponError] = useState<string>('');
  const [licenseInput, setLicenseInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleApplyCoupon = () => {
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'MOKSHA50' || code === 'GITA50') {
      setDiscountPercent(50);
      setCouponApplied(true);
    } else if (code === 'DHARMA' || code === 'PATRON') {
      setDiscountPercent(30);
      setCouponApplied(true);
    } else {
      setCouponError('Invalid coupon code. Try "MOKSHA50" for 50% off.');
    }
  };

  const getTierPrice = (tier: 'seeker' | 'sadhak' | 'patron') => {
    const tierInfo = TIER_PRICING[currency][tier];
    let base = tierInfo.amount;
    if (discountPercent > 0) {
      base = Math.round(base * (1 - discountPercent / 100));
    }
    return `${tierInfo.currencySymbol}${base}`;
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      await initiatePayment(
        selectedTier,
        currency,
        discountPercent,
        (paymentId) => {
          setIsProcessing(false);
          confetti({
            particleCount: 140,
            spread: 85,
            origin: { y: 0.6 },
            colors: ['#D97706', '#F59E0B', '#EA580C', '#10B981']
          });
          onUpgradeSuccess(selectedTier);
        },
        (error) => {
          setIsProcessing(false);
          setCouponError(error || 'Payment was not completed');
        }
      );
    } catch (e) {
      setIsProcessing(false);
    }
  };

  const handleActivateLicense = () => {
    if (licenseInput.trim().length >= 8) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      onUpgradeSuccess('patron');
    } else {
      setCouponError('Please enter a valid 8+ character license key.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: 'var(--paper-card)',
          borderColor: 'var(--border-parchment)'
        }}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b flex items-center justify-between"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl">
              👑
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-devanagari text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <span>गीता साधना प्रो · Sacred Patronage</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                Direct support for sacred wisdom preservation with instant UPI & Global Cards
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-500/10 transition-colors"
          >
            <X className="w-5 h-5 text-stone-500" />
          </button>
        </div>

        {/* Currency Switcher Pill */}
        <div className="px-5 pt-4 flex items-center justify-between border-b pb-3"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          <span className="text-xs font-semibold text-stone-500">
            Choose your preferred payment method:
          </span>
          <div className="inline-flex p-1 rounded-full bg-stone-500/10 border border-stone-300/40 dark:border-stone-700/50">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                currency === 'INR'
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-amber-600'
              }`}
            >
              🇮🇳 ₹ INR (UPI / Cards)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-amber-600'
              }`}
            >
              🌍 $ USD (Global)
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {sadhana.isPro ? (
            /* Already Pro State */
            <div className="p-8 rounded-3xl border border-emerald-500/40 bg-emerald-500/10 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl shadow-lg">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                You are a Revered Patron!
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto">
                Thank you for nurturing the eternal wisdom of Srimad Bhagavad Gita. All Pro features, unlimited AI counsel, and high-definition chanting stems are unlocked.
              </p>
            </div>
          ) : (
            <>
              {/* Tiers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                
                {/* Seeker Monthly */}
                <div 
                  onClick={() => setSelectedTier('seeker')}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    selectedTier === 'seeker'
                      ? 'border-amber-500 ring-2 ring-amber-500/30 bg-amber-500/10 scale-102'
                      : 'border-stone-300/40 dark:border-stone-700/50 hover:border-amber-400/50'
                  }`}
                  style={{ backgroundColor: selectedTier === 'seeker' ? undefined : 'var(--paper-surface)' }}
                >
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                      Seeker
                    </div>
                    <div className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 mb-1">
                      {getTierPrice('seeker')}
                      <span className="text-xs font-normal text-stone-500"> {TIER_PRICING[currency].seeker.period}</span>
                    </div>
                    <p className="text-xs text-stone-500 mb-4">
                      For daily spiritual immersion and contemplation.
                    </p>
                    <ul className="text-xs space-y-2 text-stone-700 dark:text-stone-300">
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Full Sanskrit Anvaya</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Audio Chanting Engine</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> 10 AI Counsels / mo</li>
                    </ul>
                  </div>
                </div>

                {/* Sadhak Annual (Featured) */}
                <div 
                  onClick={() => setSelectedTier('sadhak')}
                  className={`relative p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    selectedTier === 'sadhak'
                      ? 'border-amber-500 ring-2 ring-amber-500/30 bg-amber-500/15 scale-102 shadow-lg'
                      : 'border-stone-300/40 dark:border-stone-700/50 hover:border-amber-400/50'
                  }`}
                  style={{ backgroundColor: selectedTier === 'sadhak' ? undefined : 'var(--paper-surface)' }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-white shadow-sm">
                    Most Popular · 55% Off
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
                      Sadhak Annual
                    </div>
                    <div className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 mb-1">
                      {getTierPrice('sadhak')}
                      <span className="text-xs font-normal text-stone-500"> {TIER_PRICING[currency].sadhak.period}</span>
                    </div>
                    <p className="text-xs text-stone-500 mb-4">
                      Complete deep study for dedicated seekers of truth.
                    </p>
                    <ul className="text-xs space-y-2 text-stone-700 dark:text-stone-300">
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Unlimited AI Counsel</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Svadhyaya Memorizer</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> 4 Scholarly Bhashyas</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> 4K Card Studio</li>
                    </ul>
                  </div>
                </div>

                {/* Moksha Lifetime Patron */}
                <div 
                  onClick={() => setSelectedTier('patron')}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    selectedTier === 'patron'
                      ? 'border-amber-500 ring-2 ring-amber-500/30 bg-amber-500/10 scale-102'
                      : 'border-stone-300/40 dark:border-stone-700/50 hover:border-amber-400/50'
                  }`}
                  style={{ backgroundColor: selectedTier === 'patron' ? undefined : 'var(--paper-surface)' }}
                >
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                      Lifetime Patron
                    </div>
                    <div className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 mb-1">
                      {getTierPrice('patron')}
                      <span className="text-xs font-normal text-stone-500"> one-time</span>
                    </div>
                    <p className="text-xs text-stone-500 mb-4">
                      Forever patron access to all future Vedic scripture releases.
                    </p>
                    <ul className="text-xs space-y-2 text-stone-700 dark:text-stone-300">
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Everything in Sadhak</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Lifetime Updates Forever</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Pothi Journal PDF Export</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Patron Hall of Fame</li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* Coupon Code Section */}
              <div className="p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3"
                style={{
                  backgroundColor: 'var(--paper-surface)',
                  borderColor: 'var(--border-parchment)'
                }}
              >
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Gift className="w-4 h-4 text-amber-500 shrink-0" />
                  <input 
                    type="text"
                    placeholder="Enter Coupon (e.g. MOKSHA50)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="px-3 py-1.5 rounded-xl text-xs uppercase font-mono border focus:outline-none focus:ring-1 focus:ring-amber-500 w-full sm:w-48"
                    style={{
                      backgroundColor: 'var(--paper-card)',
                      borderColor: 'var(--border-parchment)',
                      color: 'var(--text-primary)'
                    }}
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-white hover:bg-amber-600 transition-colors shrink-0"
                  >
                    Apply
                  </button>
                </div>

                {couponApplied && (
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>{discountPercent}% Patron Discount Applied!</span>
                  </div>
                )}
                {couponError && (
                  <div className="text-xs text-red-500 font-medium">
                    {couponError}
                  </div>
                )}
              </div>

              {/* Primary Action Button */}
              <div className="space-y-3">
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg shadow-amber-500/25 active:scale-98 flex items-center justify-center gap-2"
                >
                  {currency === 'INR' ? <QrCode className="w-4 h-4" /> : <CreditCard className="w-4 h-4" />}
                  <span>
                    {isProcessing 
                      ? 'Opening Secure Payment...' 
                      : currency === 'INR'
                        ? `Pay ${getTierPrice(selectedTier)} via UPI / Cards`
                        : `Pay ${getTierPrice(selectedTier)} via International Cards`}
                  </span>
                </button>

                {/* Accepted Payment Logos */}
                <div className="flex items-center justify-center gap-3 text-[11px] text-stone-400 text-center flex-wrap">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 14-Day Money Back Guarantee</span>
                  <span>•</span>
                  <span>100% Encrypted & Safe</span>
                  <span>•</span>
                  {currency === 'INR' ? (
                    <span className="text-amber-700 dark:text-amber-300 font-medium">
                      Google Pay · PhonePe · Paytm · UPI QR · Debit/Credit Cards
                    </span>
                  ) : (
                    <span>Apple Pay · Google Pay · Visa/MC · Amex</span>
                  )}
                </div>
              </div>

              {/* Existing License Key Activation */}
              <div className="pt-4 border-t text-center space-y-2" style={{ borderColor: 'var(--border-parchment)' }}>
                <div className="text-xs text-stone-500">
                  Already have a Patron License Key or gifted receipt?
                </div>
                <div className="flex items-center justify-center gap-2 max-w-sm mx-auto">
                  <input 
                    type="text"
                    placeholder="Paste License Key (e.g. GITA-XXXX-XXXX)"
                    value={licenseInput}
                    onChange={(e) => setLicenseInput(e.target.value)}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-amber-500 w-full"
                    style={{
                      backgroundColor: 'var(--paper-surface)',
                      borderColor: 'var(--border-parchment)',
                      color: 'var(--text-primary)'
                    }}
                  />
                  <button
                    onClick={handleActivateLicense}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold border hover:border-amber-500 transition-colors shrink-0"
                  >
                    Activate
                  </button>
                </div>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
