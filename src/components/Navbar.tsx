import React from 'react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Compass, 
  Flame, 
  Crown, 
  SlidersHorizontal,
  BookOpen,
  SunMedium
} from 'lucide-react';
import { ThemeMode, FontStyle, UserSadhana } from '../types/gita';

interface NavbarProps {
  currentChapterNumber: number;
  onOpenChapterDrawer: () => void;
  onOpenCounselModal: () => void;
  onOpenSadhanaModal: () => void;
  onOpenProModal: () => void;
  onOpenSettingsModal: () => void;
  theme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
  fontStyle: FontStyle;
  onSelectFontStyle: (font: FontStyle) => void;
  isAmbientPlaying: boolean;
  onToggleAmbient: () => void;
  sadhana: UserSadhana;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentChapterNumber,
  onOpenChapterDrawer,
  onOpenCounselModal,
  onOpenSadhanaModal,
  onOpenProModal,
  onOpenSettingsModal,
  theme,
  onSelectTheme,
  isAmbientPlaying,
  onToggleAmbient,
  sadhana
}) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--bg-main) 85%, transparent)',
        borderColor: 'var(--border-parchment)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand & Chapter Trigger */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenChapterDrawer}
            className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full border transition-all text-left"
            style={{
              backgroundColor: 'var(--paper-surface)',
              borderColor: 'var(--border-parchment)'
            }}
            title="Choose Chapter"
          >
            <span className="text-xl">🕉️</span>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-wide text-amber-600 dark:text-amber-400 font-devanagari">
                  अध्याय {currentChapterNumber}
                </span>
                <span className="text-xs opacity-50 group-hover:opacity-100 transition-opacity">▾</span>
              </div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400 font-medium hidden sm:block">
                The Gita Sanctuary
              </div>
            </div>
          </button>
        </div>

        {/* Center: Krishna's Counsel (AI) Button */}
        <div className="flex items-center">
          <button
            onClick={onOpenCounselModal}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all hover:scale-105 active:scale-95 shadow-sm"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--accent-amber) 15%, var(--paper-surface))',
              borderColor: 'var(--accent-amber)',
              color: 'var(--text-primary)'
            }}
          >
            <Compass className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="hidden sm:inline">Ask Krishna's Counsel</span>
            <span className="sm:hidden">Counsel</span>
            <span className="px-1.5 py-0.2 bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[10px] rounded-full font-mono font-bold">AI</span>
          </button>
        </div>

        {/* Right Navigation & Tools */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Ambient Soundscape Toggle */}
          <button
            onClick={onToggleAmbient}
            className={`p-2 rounded-full border transition-all ${
              isAmbientPlaying 
                ? 'bg-amber-500/20 border-amber-500 text-amber-600 dark:text-amber-400 ring-2 ring-amber-500/20' 
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
            title={isAmbientPlaying ? "Pause ambient soundscape" : "Start Vedic ambient soundscape (Tanpura, Ganga, Bells)"}
          >
            {isAmbientPlaying ? (
              <Volume2 className="w-4 h-4 animate-bounce" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Sadhana / Streak Button */}
          <button
            onClick={onOpenSadhanaModal}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium border transition-colors hover:border-amber-500"
            style={{
              backgroundColor: 'var(--paper-surface)',
              borderColor: 'var(--border-parchment)'
            }}
            title="Daily Sadhana & Chanting Streaks"
          >
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span className="font-bold">{sadhana.streakDays}</span>
            <span className="text-[11px] opacity-70 hidden md:inline">d streak</span>
          </button>

          {/* Theme / Settings Drawer */}
          <button
            onClick={onOpenSettingsModal}
            className="p-2 rounded-full border transition-colors text-stone-500 hover:text-stone-800 dark:hover:text-stone-200"
            style={{
              backgroundColor: 'var(--paper-surface)',
              borderColor: 'var(--border-parchment)'
            }}
            title="Atmosphere & Typography Settings"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* Monetization: Unlock Pro / Patron */}
          <button
            onClick={onOpenProModal}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${
              sadhana.isPro
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-amber-500/20'
                : 'bg-stone-900 text-amber-200 hover:bg-black dark:bg-amber-500 dark:text-stone-950 dark:hover:bg-amber-400 hover:scale-105 active:scale-95'
            }`}
          >
            <Crown className="w-3.5 h-3.5" />
            <span>{sadhana.isPro ? 'Patron' : 'Upgrade'}</span>
          </button>
        </div>

      </div>
    </header>
  );
};
