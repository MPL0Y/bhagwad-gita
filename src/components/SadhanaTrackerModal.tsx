import React, { useState } from 'react';
import { UserSadhana, Verse } from '../types/gita';
import { VERSES_DATA } from '../data/verses';
import { X, Flame, Bookmark, MessageSquare, CheckCircle2, ArrowRight, Award, Trophy } from 'lucide-react';

interface SadhanaTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  sadhana: UserSadhana;
  onSelectVerse: (verseId: string) => void;
}

export const SadhanaTrackerModal: React.FC<SadhanaTrackerModalProps> = ({
  isOpen,
  onClose,
  sadhana,
  onSelectVerse
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'bookmarks' | 'journal'>('overview');

  if (!isOpen) return null;

  const totalVerses = 700;
  const progressPercent = Math.min(100, Math.round((sadhana.versesReadCount / totalVerses) * 100));

  const bookmarkedVerses = VERSES_DATA.filter(v => sadhana.bookmarkedVerseIds.includes(v.id));

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
        <div className="p-5 border-b flex items-center justify-between"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-xl">
              🔥
            </div>
            <div>
              <h2 className="text-xl font-bold font-devanagari text-amber-900 dark:text-amber-200">
                साधना ट्रैकर · Daily Spiritual Sadhana
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Track your sacred habits, verses read, and personal reflections
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

        {/* Tab Pills */}
        <div className="p-3 border-b flex items-center gap-2"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              activeTab === 'overview'
                ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                : 'bg-stone-500/5 text-stone-600 dark:text-stone-300 border-stone-300/40'
            }`}
          >
            Overview & Streaks
          </button>
          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              activeTab === 'bookmarks'
                ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                : 'bg-stone-500/5 text-stone-600 dark:text-stone-300 border-stone-300/40'
            }`}
          >
            Bookmarks ({sadhana.bookmarkedVerseIds.length})
          </button>
          <button
            onClick={() => setActiveTab('journal')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              activeTab === 'journal'
                ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                : 'bg-stone-500/5 text-stone-600 dark:text-stone-300 border-stone-300/40'
            }`}
          >
            Reflections ({Object.keys(sadhana.reflections || {}).length})
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* Streak Card */}
              <div className="p-6 rounded-3xl border flex items-center justify-between gap-4"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--accent-amber) 12%, var(--paper-surface))',
                  borderColor: 'var(--accent-amber)'
                }}
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
                    Continuous Spiritual Practice
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                    <span>{sadhana.streakDays} Day Streak</span>
                    <span className="text-2xl">🔥</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-1">
                    Read or chanted daily. Keep the sacred fire burning.
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold text-2xl shadow-md shrink-0">
                  {sadhana.streakDays}
                </div>
              </div>

              {/* Progress towards 700 Verses */}
              <div className="p-5 rounded-3xl border space-y-3"
                style={{
                  backgroundColor: 'var(--paper-surface)',
                  borderColor: 'var(--border-parchment)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Sacred Journey Completion
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    {sadhana.versesReadCount} / {totalVerses} Verses ({progressPercent}%)
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-stone-200 dark:bg-stone-800 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
                    style={{ width: `${Math.max(5, progressPercent)}%` }}
                  />
                </div>
              </div>

              {/* Spiritual Badges */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Spiritual Milestones & Upadhis
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl border border-amber-500/30 bg-amber-500/5 flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-stone-800 dark:text-stone-200">First Step (Arambha)</div>
                      <div className="text-[10px] text-stone-500">Began sacred inquiry</div>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-500/5 flex items-center gap-3">
                    <Award className="w-5 h-5 text-stone-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-stone-800 dark:text-stone-200">Sadhak Practitioner</div>
                      <div className="text-[10px] text-stone-500">Read 50 verses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bookmarks' && (
            <div className="space-y-3 animate-fade-in">
              {bookmarkedVerses.length === 0 ? (
                <div className="py-12 text-center text-stone-400 text-sm">
                  No bookmarked verses yet. Tap the bookmark icon on any sloka to save it here.
                </div>
              ) : (
                bookmarkedVerses.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => {
                      onSelectVerse(v.id);
                      onClose();
                    }}
                    className="w-full text-left p-4 rounded-2xl border hover:border-amber-400 transition-all flex items-start justify-between gap-3 group"
                    style={{
                      backgroundColor: 'var(--paper-surface)',
                      borderColor: 'var(--border-parchment)'
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
                          श्लोक {v.id}
                        </span>
                        <span className="text-xs text-stone-500">
                          (Chapter {v.chapterNumber})
                        </span>
                      </div>
                      <div className="font-devanagari font-bold text-sm text-stone-900 dark:text-stone-100 line-clamp-1">
                        {v.devanagari[0]}
                      </div>
                      <div className="text-xs font-serif text-stone-600 dark:text-stone-300 italic line-clamp-1 mt-1">
                        "{v.translationEnglish}"
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform shrink-0 mt-2" />
                  </button>
                ))
              )}
            </div>
          )}

          {activeTab === 'journal' && (
            <div className="space-y-3 animate-fade-in">
              {Object.keys(sadhana.reflections || {}).length === 0 ? (
                <div className="py-12 text-center text-stone-400 text-sm">
                  No spiritual reflections yet. Tap the message icon on any sloka to write down your inner insights.
                </div>
              ) : (
                Object.entries(sadhana.reflections).map(([vId, note]) => (
                  <div
                    key={vId}
                    className="p-4 rounded-2xl border space-y-2"
                    style={{
                      backgroundColor: 'var(--paper-surface)',
                      borderColor: 'var(--border-parchment)'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
                        Reflection on Verse {vId}
                      </span>
                      <button
                        onClick={() => {
                          onSelectVerse(vId);
                          onClose();
                        }}
                        className="text-xs text-amber-700 dark:text-amber-300 hover:underline flex items-center gap-1"
                      >
                        <span>View Sloka</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm font-serif italic text-stone-800 dark:text-stone-200">
                      "{note}"
                    </p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
