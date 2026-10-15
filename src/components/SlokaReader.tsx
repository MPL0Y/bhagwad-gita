import React, { useState } from 'react';
import { Verse, WordAnalysis, FontStyle, FontSize } from '../types/gita';
import { 
  Bookmark, 
  BookmarkCheck, 
  Share2, 
  Play, 
  Pause, 
  RotateCcw, 
  BookOpen, 
  Sparkles, 
  MessageSquare, 
  Copy, 
  Check, 
  Volume2, 
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { soundscape } from '../services/ambientAudio';

interface SlokaReaderProps {
  verse: Verse;
  isBookmarked: boolean;
  onToggleBookmark: (verseId: string) => void;
  onOpenCardExport: (verse: Verse) => void;
  onOpenReflectionNote: (verse: Verse) => void;
  hasReflection: boolean;
  fontStyle: FontStyle;
  fontSize: FontSize;
  onMarkRead: (verseId: string) => void;
}

export const SlokaReader: React.FC<SlokaReaderProps> = ({
  verse,
  isBookmarked,
  onToggleBookmark,
  onOpenCardExport,
  onOpenReflectionNote,
  hasReflection,
  fontStyle,
  fontSize,
  onMarkRead
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [selectedWord, setSelectedWord] = useState<WordAnalysis | null>(null);
  const [activeCommentaryIndex, setActiveCommentaryIndex] = useState<number>(0);
  const [isChanting, setIsChanting] = useState<boolean>(false);
  const [chantProgress, setChantProgress] = useState<number>(0);
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Compute font size classes
  const getSanskritFontSize = () => {
    switch (fontSize) {
      case 'standard': return 'text-xl sm:text-2xl leading-relaxed';
      case 'large': return 'text-2xl sm:text-3xl leading-loose';
      case 'monumental': return 'text-3xl sm:text-4xl leading-loose';
      default: return 'text-2xl sm:text-3xl leading-loose';
    }
  };

  const handlePlayChant = () => {
    if (isChanting) {
      setIsChanting(false);
      setChantProgress(0);
      return;
    }

    setIsChanting(true);
    onMarkRead(verse.id);

    // Chanting pitch simulation
    const notes = [146.83, 164.81, 174.61, 146.83];
    soundscape.chantVedicMeter(notes, (step) => {
      setChantProgress(step + 1);
      if (step === notes.length - 1) {
        setTimeout(() => {
          if (isLooping) {
            handlePlayChant();
          } else {
            setIsChanting(false);
            setChantProgress(0);
          }
        }, 1000);
      }
    });
  };

  const handleCopy = () => {
    const textToCopy = `श्रीमद्भगवद्गीता [${verse.id}]\n\n${verse.devanagari.join('\n')}\n\n${verse.transliteration.join('\n')}\n\nTranslation: ${verse.translationEnglish}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSpeakerLabel = (speaker: string) => {
    switch (speaker) {
      case 'Krishna': return 'श्रीभगवानुवाच (The Blessed Lord Said)';
      case 'Arjuna': return 'अर्जुन उवाच (Arjuna Said)';
      case 'Sanjaya': return 'सञ्जय उवाच (Sanjaya Said)';
      case 'Dhritarashtra': return 'धृतराष्ट्र उवाच (King Dhritarashtra Said)';
      default: return speaker;
    }
  };

  return (
    <article 
      className="relative rounded-3xl p-5 sm:p-8 mb-8 border transition-all duration-300"
      style={{
        backgroundColor: 'var(--paper-card)',
        borderColor: 'var(--border-parchment)',
        boxShadow: 'var(--card-shadow)'
      }}
    >
      {/* Top Header: Verse ID, Speaker & Quick Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b"
        style={{ borderColor: 'var(--border-parchment)' }}
      >
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--accent-gold) 12%, var(--paper-surface))',
              borderColor: 'var(--accent-gold)',
              color: 'var(--accent-gold)'
            }}
          >
            श्लोक {verse.id}
          </span>
          <span className="text-xs sm:text-sm font-devanagari font-semibold text-stone-600 dark:text-stone-300">
            {getSpeakerLabel(verse.speaker)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          {/* Chanting Audio Button */}
          <button
            onClick={handlePlayChant}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              isChanting 
                ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                : 'hover:border-amber-400 bg-stone-500/5'
            }`}
            title="Listen to Vedic Chanting"
          >
            {isChanting ? <Pause className="w-3.5 h-3.5 animate-pulse" /> : <Play className="w-3.5 h-3.5 text-amber-500" />}
            <span className="hidden sm:inline">{isChanting ? 'Chanting...' : 'Chant'}</span>
          </button>

          {/* Svadhyaya Loop Button */}
          <button
            onClick={() => setIsLooping(!isLooping)}
            className={`p-1.5 rounded-full border transition-colors ${
              isLooping 
                ? 'bg-amber-500/20 border-amber-500 text-amber-600 dark:text-amber-400' 
                : 'border-transparent text-stone-400 hover:text-stone-600 dark:hover:text-stone-300'
            }`}
            title={isLooping ? "Looping enabled for memorization (Svadhyaya)" : "Enable loop for memorization"}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Bookmark */}
          <button
            onClick={() => onToggleBookmark(verse.id)}
            className={`p-1.5 rounded-full border transition-colors ${
              isBookmarked
                ? 'bg-amber-500/20 border-amber-500 text-amber-600 dark:text-amber-400'
                : 'border-transparent text-stone-400 hover:text-stone-600 dark:hover:text-stone-300'
            }`}
            title="Bookmark this Sloka"
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-amber-500" /> : <Bookmark className="w-4 h-4" />}
          </button>

          {/* Reflection Journal Note */}
          <button
            onClick={() => onOpenReflectionNote(verse)}
            className={`p-1.5 rounded-full border transition-colors ${
              hasReflection
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-stone-400 hover:text-stone-600 dark:hover:text-stone-300'
            }`}
            title="Write your personal spiritual reflection"
          >
            <MessageSquare className="w-4 h-4" />
          </button>

          {/* Share / 4K Card Export */}
          <button
            onClick={() => onOpenCardExport(verse)}
            className="p-1.5 rounded-full border border-transparent text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
            title="Export 4K Social Story Card"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Copy Verse */}
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-full border border-transparent text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
            title="Copy verse and translation"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Sanskrit Sloka in Devanagari (Tactile sacred presentation) */}
      <div className="text-center py-4 sm:py-6">
        <div className={`font-devanagari font-bold text-amber-950 dark:text-amber-100 ${getSanskritFontSize()} select-text drop-shadow-sm`}>
          {verse.devanagari.map((line, idx) => (
            <div key={idx} className="my-1.5 tracking-wide">
              {line}
            </div>
          ))}
        </div>

        {/* Roman Transliteration (IAST) */}
        <div className="mt-3 text-sm sm:text-base font-serif italic text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto">
          {verse.transliteration.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      </div>

      {/* Interactive Word-by-Word Discovery (Anvaya / Pada Chheda) Chips */}
      <div className="my-4 pt-3 border-t" style={{ borderColor: 'var(--border-parchment)' }}>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[11px] font-bold tracking-wider uppercase text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            <span>पदच्छेद · Tap words for Sanskrit root meaning:</span>
          </span>
          {selectedWord && (
            <button 
              onClick={() => setSelectedWord(null)}
              className="text-[11px] text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              Clear
            </button>
          )}
        </div>

        {/* Word Chips Carousel */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {verse.wordBreakdown.map((word, wIdx) => {
            const isSelected = selectedWord?.sanskrit === word.sanskrit;
            return (
              <button
                key={wIdx}
                onClick={() => setSelectedWord(isSelected ? null : word)}
                className={`px-2.5 py-1 rounded-lg text-xs font-devanagari border transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-white border-amber-600 shadow-sm scale-105'
                    : 'bg-stone-500/5 hover:bg-amber-500/10 border-stone-300/40 dark:border-stone-700/50 text-stone-800 dark:text-stone-200'
                }`}
              >
                {word.sanskrit}
              </button>
            );
          })}
        </div>

        {/* Active Word Meaning Inspector Popover */}
        {selectedWord && (
          <div className="mt-3 p-3.5 rounded-2xl border animate-slide-up flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--accent-amber) 8%, var(--paper-surface))',
              borderColor: 'var(--accent-amber)'
            }}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-devanagari font-bold text-lg text-amber-900 dark:text-amber-200">
                  {selectedWord.sanskrit}
                </span>
                <span className="text-xs font-serif italic text-stone-500 dark:text-stone-400">
                  ({selectedWord.transliteration})
                </span>
                {selectedWord.grammar && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-500/10 text-stone-600 dark:text-stone-300 font-mono">
                    {selectedWord.grammar}
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-100 mt-0.5">
                Meaning: <strong className="text-amber-700 dark:text-amber-400">{selectedWord.english}</strong>
                {selectedWord.root && (
                  <span className="text-xs opacity-75 ml-2 font-mono">
                    [Root: {selectedWord.root}]
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={() => setSelectedWord(null)}
              className="text-xs px-2.5 py-1 rounded-full bg-stone-500/10 hover:bg-stone-500/20 text-stone-600 dark:text-stone-300 self-end sm:self-auto"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* Expand/Collapse Translation & Commentary Drawer Toggle */}
      <div className="pt-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between py-2 text-xs font-semibold text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isExpanded ? "Hide Translation & Commentaries" : "Show Translation & Sacred Bhashyas"}</span>
          </span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Smooth Translation & Multi-School Commentary Sheet */}
      {isExpanded && (
        <div className="mt-2 pt-4 border-t space-y-5 animate-fade-in"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          {/* English Translation */}
          <div className="p-4 rounded-2xl border"
            style={{
              backgroundColor: 'var(--paper-surface)',
              borderColor: 'var(--border-parchment)'
            }}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5">
              Divine Translation
            </div>
            <p className="text-base sm:text-lg font-serif leading-relaxed text-stone-900 dark:text-stone-100">
              "{verse.translationEnglish}"
            </p>
            {verse.translationHindi && (
              <p className="text-sm font-devanagari text-stone-600 dark:text-stone-400 mt-2 leading-relaxed border-t pt-2"
                style={{ borderColor: 'var(--border-parchment)' }}
              >
                {verse.translationHindi}
              </p>
            )}
          </div>

          {/* Core Insight Pill */}
          <div className="flex items-center gap-2 p-3 rounded-xl border border-amber-500/30 bg-amber-500/5 text-amber-800 dark:text-amber-200 text-xs sm:text-sm font-medium">
            <span className="text-base">💡</span>
            <span>
              <strong>Core Insight:</strong> {verse.coreInsight}
            </span>
          </div>

          {/* Multi-School Commentary Switcher */}
          {verse.commentaries && verse.commentaries.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                {verse.commentaries.map((comm, cIdx) => (
                  <button
                    key={cIdx}
                    onClick={() => setActiveCommentaryIndex(cIdx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-all ${
                      activeCommentaryIndex === cIdx
                        ? 'bg-stone-900 text-white dark:bg-amber-500 dark:text-stone-950 border-transparent shadow-sm'
                        : 'bg-stone-500/5 border-stone-300/40 dark:border-stone-700/50 text-stone-600 dark:text-stone-400 hover:border-amber-400'
                    }`}
                  >
                    <span>{comm.author}</span>
                    <span className="opacity-60 text-[10px] ml-1">({comm.school})</span>
                  </button>
                ))}
              </div>

              {/* Active Commentary Text */}
              <div className="p-4 rounded-2xl border text-sm sm:text-base leading-relaxed text-stone-700 dark:text-stone-300 font-serif"
                style={{
                  backgroundColor: 'var(--paper-surface)',
                  borderColor: 'var(--border-parchment)'
                }}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1">
                  {verse.commentaries[activeCommentaryIndex].author} · {verse.commentaries[activeCommentaryIndex].school}
                </div>
                <p>
                  {verse.commentaries[activeCommentaryIndex].text}
                </p>
              </div>
            </div>
          )}

        </div>
      )}

    </article>
  );
};
