import React from 'react';
import { ThemeMode, FontStyle, FontSize } from '../types/gita';
import { X, Sun, Moon, Sunrise, Sparkles, Feather, Type } from 'lucide-react';

interface ThemeSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
  fontStyle: FontStyle;
  onSelectFontStyle: (style: FontStyle) => void;
  fontSize: FontSize;
  onSelectFontSize: (size: FontSize) => void;
}

export const ThemeSettingsModal: React.FC<ThemeSettingsModalProps> = ({
  isOpen,
  onClose,
  theme,
  onSelectTheme,
  fontStyle,
  onSelectFontStyle,
  fontSize,
  onSelectFontSize
}) => {
  if (!isOpen) return null;

  const themes: { id: ThemeMode; name: string; subtitle: string; icon: string; previewBg: string }[] = [
    {
      id: 'twilight',
      name: 'Kurukshetra Twilight',
      subtitle: 'Warm night lamp reading · No harsh glare',
      icon: '🌙',
      previewBg: '#181614'
    },
    {
      id: 'parchment',
      name: 'Vedic Bhojpatra',
      subtitle: 'Warm antique manuscript parchment',
      icon: '📜',
      previewBg: '#F9F6EE'
    },
    {
      id: 'dawn',
      name: 'Brahmamuhurta Dawn',
      subtitle: 'Sunrise golden saffron radiance',
      icon: '🌅',
      previewBg: '#FDE8D3'
    },
    {
      id: 'jade',
      name: 'Vaikuntha Jade',
      subtitle: 'Forest hermitage & sandalwood',
      icon: '🍃',
      previewBg: '#E8EFE8'
    },
    {
      id: 'cosmic',
      name: 'Vishvarupa Cosmic',
      subtitle: 'Infinite starlight & celestial nebula',
      icon: '🌌',
      previewBg: '#101426'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: 'var(--paper-card)',
          borderColor: 'var(--border-parchment)'
        }}
      >
        {/* Header */}
        <div className="p-5 border-b flex items-center justify-between"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          <div>
            <h2 className="text-xl font-bold font-devanagari text-amber-900 dark:text-amber-200">
              वातावरण एवं अक्षर · Atmosphere & Typography
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Customize visual lighting and sacred text rendering
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-500/10 transition-colors"
          >
            <X className="w-5 h-5 text-stone-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Theme Atmospheres */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              Atmospheric Reading Themes
            </div>
            <div className="space-y-2">
              {themes.map((t) => {
                const isSelected = theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => onSelectTheme(t.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-amber-500 ring-2 ring-amber-500/25 bg-amber-500/10'
                        : 'border-stone-300/40 dark:border-stone-700/50 hover:border-amber-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{t.icon}</span>
                      <div>
                        <div className="text-sm font-bold text-stone-900 dark:text-stone-100">
                          {t.name}
                        </div>
                        <div className="text-xs text-stone-500 dark:text-stone-400">
                          {t.subtitle}
                        </div>
                      </div>
                    </div>
                    <div 
                      className="w-6 h-6 rounded-full border shadow-inner shrink-0"
                      style={{ backgroundColor: t.previewBg }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Typography Mode */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              Sacred Typography
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onSelectFontStyle('serif')}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  fontStyle === 'serif'
                    ? 'border-amber-500 bg-amber-500/10 font-bold'
                    : 'border-stone-300/40 dark:border-stone-700/50'
                }`}
              >
                <div className="font-serif text-lg">Aa</div>
                <div className="text-[11px] text-stone-500 mt-1">Vedic Serif</div>
              </button>

              <button
                onClick={() => onSelectFontStyle('sans')}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  fontStyle === 'sans'
                    ? 'border-amber-500 bg-amber-500/10 font-bold'
                    : 'border-stone-300/40 dark:border-stone-700/50'
                }`}
              >
                <div className="font-sans text-lg">Aa</div>
                <div className="text-[11px] text-stone-500 mt-1">Modern Sans</div>
              </button>

              <button
                onClick={() => onSelectFontStyle('traditional')}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  fontStyle === 'traditional'
                    ? 'border-amber-500 bg-amber-500/10 font-bold'
                    : 'border-stone-300/40 dark:border-stone-700/50'
                }`}
              >
                <div className="font-devanagari text-lg">ॐ</div>
                <div className="text-[11px] text-stone-500 mt-1">Pothi Classical</div>
              </button>
            </div>
          </div>

          {/* Sanskrit Font Scale */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              Sloka Text Size
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onSelectFontSize('standard')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold ${
                  fontSize === 'standard' ? 'border-amber-500 bg-amber-500/15' : 'border-stone-300/40 dark:border-stone-700/50'
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => onSelectFontSize('large')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold ${
                  fontSize === 'large' ? 'border-amber-500 bg-amber-500/15' : 'border-stone-300/40 dark:border-stone-700/50'
                }`}
              >
                Large
              </button>
              <button
                onClick={() => onSelectFontSize('monumental')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold ${
                  fontSize === 'monumental' ? 'border-amber-500 bg-amber-500/15' : 'border-stone-300/40 dark:border-stone-700/50'
                }`}
              >
                Monumental
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
