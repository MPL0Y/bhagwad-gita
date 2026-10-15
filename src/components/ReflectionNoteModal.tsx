import React, { useState } from 'react';
import { Verse } from '../types/gita';
import { X, Save, MessageSquare, Check } from 'lucide-react';

interface ReflectionNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  verse: Verse | null;
  initialNote: string;
  onSaveNote: (verseId: string, note: string) => void;
}

export const ReflectionNoteModal: React.FC<ReflectionNoteModalProps> = ({
  isOpen,
  onClose,
  verse,
  initialNote,
  onSaveNote
}) => {
  const [note, setNote] = useState<string>(initialNote);
  const [saved, setSaved] = useState<boolean>(false);

  React.useEffect(() => {
    setNote(initialNote);
    setSaved(false);
  }, [verse, initialNote]);

  if (!isOpen || !verse) return null;

  const handleSave = () => {
    onSaveNote(verse.id, note);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 600);
  };

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
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-5 h-5 text-amber-500" />
            <div>
              <h2 className="text-lg font-bold font-devanagari text-stone-900 dark:text-stone-100">
                आत्मचिंतन · Spiritual Reflection [श्लोक {verse.id}]
              </h2>
              <p className="text-xs text-stone-500">
                Record personal realizations and daily applications of this verse
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

        {/* Sloka Excerpt */}
        <div className="p-4 bg-stone-500/5 border-b text-xs font-serif italic text-stone-600 dark:text-stone-300"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          "{verse.translationEnglish}"
        </div>

        {/* Text Area */}
        <div className="p-5">
          <textarea
            rows={6}
            placeholder="Write your contemplative reflections, notes on your meditation, or how this verse speaks to your current life season..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-4 rounded-2xl text-sm border focus:outline-none focus:ring-2 focus:ring-amber-500/30 leading-relaxed"
            style={{
              backgroundColor: 'var(--paper-surface)',
              borderColor: 'var(--border-parchment)',
              color: 'var(--text-primary)'
            }}
          />
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex items-center justify-between"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          <button
            onClick={() => {
              setNote('');
              onSaveNote(verse.id, '');
              onClose();
            }}
            className="text-xs text-stone-400 hover:text-red-500 transition-colors"
          >
            Clear Note
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-amber-500 text-white hover:bg-amber-600 transition-all shadow-md active:scale-95"
          >
            {saved ? <Check className="w-4 h-4 text-emerald-200" /> : <Save className="w-4 h-4" />}
            <span>{saved ? 'Saved' : 'Save Reflection'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
