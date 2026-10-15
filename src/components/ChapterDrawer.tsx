import React, { useState } from 'react';
import { Chapter } from '../types/gita';
import { X, Search, CheckCircle2, BookOpen } from 'lucide-react';
import { CHAPTERS_DATA } from '../data/chapters';

interface ChapterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapterNumber: number;
  onSelectChapter: (chapterNumber: number) => void;
  completedChapters?: number[];
}

const DEVANAGARI_NUMBERS = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "१०", "११", "१२", "१३", "१४", "१५", "१६", "१७", "१८"];

export const ChapterDrawer: React.FC<ChapterDrawerProps> = ({
  isOpen,
  onClose,
  currentChapterNumber,
  onSelectChapter,
  completedChapters = []
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredChapters = CHAPTERS_DATA.filter(ch => 
    ch.nameSanskrit.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.nameTransliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.number.toString().includes(searchQuery)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: 'var(--paper-card)',
          borderColor: 'var(--border-parchment)'
        }}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b flex items-center justify-between"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-devanagari text-amber-800 dark:text-amber-200">
              अष्टादश अध्यायाः · The 18 Chapters
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
              Select an Adhyaya to immerse in its divine discourse
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-500/10 transition-colors"
          >
            <X className="w-5 h-5 text-stone-500" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b" style={{ borderColor: 'var(--border-parchment)' }}>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input 
              type="text"
              placeholder="Search by chapter title, Sanskrit, or spiritual theme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all"
              style={{
                backgroundColor: 'var(--paper-surface)',
                borderColor: 'var(--border-parchment)',
                color: 'var(--text-primary)'
              }}
            />
          </div>
        </div>

        {/* Chapter List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2">
          {filteredChapters.map((ch) => {
            const isSelected = ch.number === currentChapterNumber;
            const isCompleted = completedChapters.includes(ch.number);

            return (
              <button
                key={ch.number}
                onClick={() => {
                  onSelectChapter(ch.number);
                  onClose();
                }}
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start gap-3.5 group ${
                  isSelected
                    ? 'border-amber-500 ring-2 ring-amber-500/20 bg-amber-500/10'
                    : 'hover:border-amber-400/50 hover:bg-stone-500/5'
                }`}
                style={{
                  backgroundColor: isSelected ? undefined : 'var(--paper-surface)',
                  borderColor: isSelected ? undefined : 'var(--border-parchment)'
                }}
              >
                {/* Sanskrit Numeral Badge */}
                <div 
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-devanagari font-bold text-lg shrink-0 border ${
                    isSelected 
                      ? 'bg-amber-500 text-white border-amber-600' 
                      : 'bg-stone-200/50 dark:bg-stone-800/50 text-amber-700 dark:text-amber-300 border-stone-300 dark:border-stone-700'
                  }`}
                >
                  {DEVANAGARI_NUMBERS[ch.number] || ch.number}
                </div>

                {/* Chapter Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-base sm:text-lg font-devanagari truncate text-stone-900 dark:text-stone-100">
                      {ch.nameSanskrit}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-stone-200/60 dark:bg-stone-800 text-stone-600 dark:text-stone-300 shrink-0">
                      {ch.verseCount} श्लोकाः
                    </span>
                  </div>

                  <div className="text-xs font-serif italic text-amber-700 dark:text-amber-300 mb-1">
                    {ch.nameTransliteration} — {ch.nameEnglish}
                  </div>

                  <div className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-1">
                    {ch.theme}
                  </div>
                </div>

                {/* Status indicator */}
                {isCompleted && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
