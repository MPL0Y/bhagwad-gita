import React, { useState } from 'react';
import { LifeDilemma, Verse } from '../types/gita';
import { LIFE_DILEMMAS } from '../data/lifeDilemmas';
import { VERSES_DATA } from '../data/verses';
import { X, Sparkles, Send, ArrowRight, Compass, ShieldAlert, Heart, Flame, BookOpen } from 'lucide-react';

interface KrishnaCounselModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVerse: (verseId: string) => void;
}

export const KrishnaCounselModal: React.FC<KrishnaCounselModalProps> = ({
  isOpen,
  onClose,
  onSelectVerse
}) => {
  const [selectedDilemma, setSelectedDilemma] = useState<LifeDilemma | null>(LIFE_DILEMMAS[0]);
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Dilemmas' },
    { id: 'anxiety', label: 'Anxiety & Work' },
    { id: 'purpose', label: 'Purpose & Self-Doubt' },
    { id: 'inner-peace', label: 'Grief & Anger' },
    { id: 'duty', label: 'Duty & Burnout' },
  ];

  const filteredDilemmas = activeCategory === 'all' 
    ? LIFE_DILEMMAS 
    : LIFE_DILEMMAS.filter(d => d.category === activeCategory);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;

    setIsThinking(true);
    setTimeout(() => {
      // Find the most relevant dilemma or create an enlightened synthetic response
      const matched = LIFE_DILEMMAS.find(d => 
        customQuestion.toLowerCase().includes(d.category) ||
        d.title.toLowerCase().includes(customQuestion.toLowerCase().slice(0, 5))
      ) || LIFE_DILEMMAS[0];

      setSelectedDilemma({
        id: 'custom-' + Date.now(),
        title: customQuestion,
        emotion: 'Seeker in Inquiry',
        category: 'anxiety',
        description: customQuestion,
        krishnaResponse: `Arjuna, know that the turbulence you experience in this inquiry is the restless vibration of the mind (Chanchalam hi manah). In Bhagavad Gita, the Divine assures that through patient regular practice (Abhyasa) and unhooking your ego from temporary worldly outcomes (Vairagya), you can conquer any storm. Look inward to the indestructible Atman that witnesses this dilemma without being stained by it.`,
        verseCitations: matched.verseCitations,
        actionStep: "Pause your frantic thinking. Close your eyes, take three deep breaths into your belly, and remember: you are the divine consciousness observing the play of nature. Perform your immediate next task with full love."
      });
      setIsThinking(false);
      setCustomQuestion('');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: 'var(--paper-card)',
          borderColor: 'var(--border-parchment)'
        }}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b flex items-center justify-between"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl">
              🪷
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-devanagari text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <span>कृष्णसंवादः · The Charioteer's Counsel</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-700 dark:text-amber-300">
                  AI SUTRA
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                Receive timeless Vedic wisdom and practical guidance for life's toughest crossroads
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

        {/* Category Pills & Custom Input Form */}
        <div className="p-4 border-b space-y-3" style={{ borderColor: 'var(--border-parchment)' }}>
          <form onSubmit={handleCustomSubmit} className="relative">
            <input 
              type="text"
              placeholder="Ask the Charioteer: 'How do I deal with burnout?' or 'What if I fail?'..."
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              className="w-full pl-4 pr-12 py-3 rounded-2xl text-sm border focus:outline-none focus:ring-2 focus:ring-amber-500/40 shadow-inner"
              style={{
                backgroundColor: 'var(--paper-surface)',
                borderColor: 'var(--border-parchment)',
                color: 'var(--text-primary)'
              }}
            />
            <button
              type="submit"
              disabled={isThinking || !customQuestion.trim()}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-40 transition-all shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-all ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                    : 'bg-stone-500/5 border-stone-300/40 dark:border-stone-700/50 text-stone-600 dark:text-stone-400 hover:border-amber-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid: Left Dilemma Picker, Right Divine Response */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          {/* Left Column: Dilemmas List */}
          <div className="md:col-span-5 p-3 sm:p-4 space-y-2 overflow-y-auto max-h-[40vh] md:max-h-none">
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-2 pb-1">
              Select Human Dilemma
            </div>
            {filteredDilemmas.map((dil) => {
              const isSelected = selectedDilemma?.id === dil.id;
              return (
                <button
                  key={dil.id}
                  onClick={() => setSelectedDilemma(dil)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all ${
                    isSelected
                      ? 'border-amber-500 ring-2 ring-amber-500/20 bg-amber-500/10'
                      : 'hover:border-amber-400/50 hover:bg-stone-500/5'
                  }`}
                  style={{
                    backgroundColor: isSelected ? undefined : 'var(--paper-surface)',
                    borderColor: isSelected ? undefined : 'var(--border-parchment)'
                  }}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100">
                      {dil.title}
                    </span>
                  </div>
                  <div className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                    {dil.emotion}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Krishna's Divine Guidance */}
          <div className="md:col-span-7 p-5 sm:p-6 space-y-5 overflow-y-auto"
            style={{ backgroundColor: 'var(--paper-card)' }}
          >
            {isThinking ? (
              <div className="py-20 text-center space-y-3">
                <Sparkles className="w-8 h-8 text-amber-500 animate-spin mx-auto" />
                <div className="text-sm font-devanagari font-bold text-amber-800 dark:text-amber-200">
                  चिंतन चल रहा है · Consulting the Eternal Song of God...
                </div>
              </div>
            ) : selectedDilemma ? (
              <div className="space-y-5 animate-fade-in">
                
                {/* Header */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-2">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Divine Counsel</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                    {selectedDilemma.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 italic mt-1">
                    "{selectedDilemma.description}"
                  </p>
                </div>

                {/* The Charioteer's Voice */}
                <div className="p-4 sm:p-5 rounded-2xl border relative overflow-hidden"
                  style={{
                    backgroundColor: 'var(--paper-surface)',
                    borderColor: 'var(--border-parchment)'
                  }}
                >
                  <div className="text-xs font-bold font-devanagari tracking-wider uppercase text-amber-700 dark:text-amber-400 mb-2">
                    श्रीभगवानुवाच · Krishna's Guidance:
                  </div>
                  <p className="text-sm sm:text-base font-serif leading-relaxed text-stone-800 dark:text-stone-200">
                    {selectedDilemma.krishnaResponse}
                  </p>
                </div>

                {/* Concrete Sadhana Action Step */}
                <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 text-xs sm:text-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                    <Flame className="w-4 h-4" />
                    <span>Immediate Sadhana Step for Today:</span>
                  </div>
                  <p className="text-stone-800 dark:text-stone-200 font-medium">
                    {selectedDilemma.actionStep}
                  </p>
                </div>

                {/* Referenced Gita Verses to Study */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">
                    Sacred Gita Sloka Foundations:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedDilemma.verseCitations.map((verseId) => {
                      const vObj = VERSES_DATA.find(v => v.id === verseId);
                      return (
                        <button
                          key={verseId}
                          onClick={() => {
                            onSelectVerse(verseId);
                            onClose();
                          }}
                          className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-stone-800 dark:text-stone-200 text-xs font-medium transition-all group"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                          <span>Chapter {vObj ? `${vObj.chapterNumber}, Verse ${vObj.verseNumber}` : verseId}</span>
                          <ArrowRight className="w-3 h-3 opacity-60 group-hover:translate-x-1 transition-transform" />
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            ) : null}
          </div>
        </div>

      </div>
    </div>
  );
};
