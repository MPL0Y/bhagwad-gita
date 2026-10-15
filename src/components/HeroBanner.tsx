import React from 'react';
import { Chapter } from '../types/gita';
import { Sparkles, Scroll, Play, Bell } from 'lucide-react';
import { soundscape } from '../services/ambientAudio';

interface HeroBannerProps {
  chapter: Chapter;
  onJumpToFirstVerse: () => void;
  onOpenCounsel: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  chapter,
  onJumpToFirstVerse,
  onOpenCounsel
}) => {
  const handleShankha = () => {
    soundscape.blowShankha();
  };

  const handleTempleBell = () => {
    soundscape.ringTempleBell(1.0);
  };

  return (
    <div className="relative overflow-hidden py-10 sm:py-14 px-4 sm:px-6 rounded-3xl mb-8 border transition-all duration-300"
      style={{
        backgroundColor: 'var(--paper-surface)',
        borderColor: 'var(--border-parchment)',
        boxShadow: 'var(--card-shadow)'
      }}
    >
      {/* Decorative background sacred geometry aura */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: 'var(--accent-amber)' }}
      />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: 'var(--accent-crimson)' }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Sanskrit Chapter Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--accent-gold) 10%, var(--paper-card))',
            borderColor: 'var(--border-parchment)',
            color: 'var(--accent-gold)'
          }}
        >
          <span>अध्याय {chapter.number}</span>
          <span>•</span>
          <span>{chapter.verseCount} श्लोकाः (Verses)</span>
        </div>

        {/* Sanskrit Title */}
        <h1 className="text-3xl sm:text-5xl font-bold font-devanagari tracking-wide text-amber-800 dark:text-amber-200 mb-2">
          {chapter.nameSanskrit}
        </h1>

        {/* Transliteration & English Title */}
        <div className="text-lg sm:text-2xl font-serif italic text-stone-700 dark:text-stone-300 mb-1">
          {chapter.nameTransliteration}
        </div>
        <div className="text-sm sm:text-base font-semibold tracking-wide text-stone-500 dark:text-stone-400 mb-5">
          {chapter.nameEnglish}
        </div>

        {/* Philosophical Essence Quote */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-600 dark:text-stone-300 font-serif leading-relaxed mb-6 italic">
          "{chapter.philosophicalEssence}"
        </p>

        {/* Interactive Sacred Soundscape Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onJumpToFirstVerse}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'var(--accent-gold)',
              color: '#FFFFFF'
            }}
          >
            <Scroll className="w-4 h-4" />
            <span>Read Verses</span>
          </button>

          <button
            onClick={handleShankha}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-xs tracking-wider uppercase border transition-all hover:border-amber-500 active:scale-95"
            style={{
              backgroundColor: 'var(--paper-card)',
              borderColor: 'var(--border-parchment)',
              color: 'var(--text-primary)'
            }}
            title="Play the Sacred Conch (Shankha) blast to inaugurate reading"
          >
            <span>🐚</span>
            <span>Shankha Call</span>
          </button>

          <button
            onClick={handleTempleBell}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-xs tracking-wider uppercase border transition-all hover:border-amber-500 active:scale-95"
            style={{
              backgroundColor: 'var(--paper-card)',
              borderColor: 'var(--border-parchment)',
              color: 'var(--text-primary)'
            }}
            title="Chime the Temple Bell"
          >
            <Bell className="w-3.5 h-3.5 text-amber-500" />
            <span>Bell Chime</span>
          </button>

          <button
            onClick={onOpenCounsel}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-xs tracking-wider uppercase border transition-all hover:border-amber-500 active:scale-95"
            style={{
              backgroundColor: 'var(--paper-card)',
              borderColor: 'var(--border-parchment)',
              color: 'var(--text-primary)'
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>Life Dilemma</span>
          </button>
        </div>

      </div>
    </div>
  );
};
