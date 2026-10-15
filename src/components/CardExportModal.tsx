import React, { useState, useEffect } from 'react';
import { Verse, ThemeMode } from '../types/gita';
import { exportVerseToImage, CardFormat } from '../services/cardExporter';
import { X, Download, Share2, Sparkles, Check } from 'lucide-react';

interface CardExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  verse: Verse | null;
  theme: ThemeMode;
}

export const CardExportModal: React.FC<CardExportModalProps> = ({
  isOpen,
  onClose,
  verse,
  theme
}) => {
  const [format, setFormat] = useState<CardFormat>('story');
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [downloaded, setDownloaded] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen || !verse) return;

    let isMounted = true;
    setIsGenerating(true);

    exportVerseToImage(verse, format, theme)
      .then((url) => {
        if (isMounted) {
          setPreviewUrl(url);
          setIsGenerating(false);
        }
      })
      .catch((err) => {
        console.error("Card generation error:", err);
        if (isMounted) setIsGenerating(false);
      });

    return () => {
      isMounted = false;
    };
  }, [isOpen, verse, format, theme]);

  if (!isOpen || !verse) return null;

  const handleDownload = () => {
    if (!previewUrl) return;
    const a = document.createElement('a');
    a.href = previewUrl;
    a.download = `Gita_Sloka_${verse.id}_${format}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300"
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
            <h2 className="text-xl font-bold font-devanagari text-amber-900 dark:text-amber-200 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>4K Social Card Studio · श्लोक {verse.id}</span>
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Generate aesthetic high-resolution cards for Instagram Stories, Twitter, and WhatsApp
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-500/10 transition-colors"
          >
            <X className="w-5 h-5 text-stone-500" />
          </button>
        </div>

        {/* Format Selector Pills */}
        <div className="p-4 border-b flex items-center justify-center gap-2"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          <button
            onClick={() => setFormat('story')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              format === 'story'
                ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                : 'bg-stone-500/5 text-stone-600 dark:text-stone-300 border-stone-300/40 hover:border-amber-400'
            }`}
          >
            📱 Instagram Story (9:16)
          </button>
          <button
            onClick={() => setFormat('square')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              format === 'square'
                ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                : 'bg-stone-500/5 text-stone-600 dark:text-stone-300 border-stone-300/40 hover:border-amber-400'
            }`}
          >
            ⏹️ Square Post (1:1)
          </button>
          <button
            onClick={() => setFormat('landscape')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              format === 'landscape'
                ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                : 'bg-stone-500/5 text-stone-600 dark:text-stone-300 border-stone-300/40 hover:border-amber-400'
            }`}
          >
            🖥️ Twitter / Banner (16:9)
          </button>
        </div>

        {/* Live Preview Area */}
        <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center bg-stone-950/10 dark:bg-stone-950/40 min-h-[300px]">
          {isGenerating ? (
            <div className="text-center space-y-2">
              <Sparkles className="w-8 h-8 text-amber-500 animate-spin mx-auto" />
              <div className="text-xs font-mono text-stone-400">Rendering high-res card...</div>
            </div>
          ) : previewUrl ? (
            <img 
              src={previewUrl} 
              alt={`Verse ${verse.id} card preview`}
              className="max-h-[50vh] rounded-2xl shadow-2xl border object-contain"
              style={{ borderColor: 'var(--border-parchment)' }}
            />
          ) : null}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t flex items-center justify-between"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          <div className="text-xs text-stone-500 hidden sm:block">
            Format: {format === 'story' ? '1080 × 1920' : format === 'square' ? '1080 × 1080' : '1200 × 675'} PNG
          </div>
          <button
            onClick={handleDownload}
            disabled={!previewUrl || isGenerating}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-amber-500 text-white hover:bg-amber-600 transition-all shadow-md active:scale-95 disabled:opacity-50"
          >
            {downloaded ? <Check className="w-4 h-4 text-emerald-200" /> : <Download className="w-4 h-4" />}
            <span>{downloaded ? 'Downloaded Successfully!' : 'Download High-Res PNG'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
