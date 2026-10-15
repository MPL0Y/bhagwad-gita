import React, { useState, useEffect } from 'react';
import { 
  ThemeMode, 
  FontStyle, 
  FontSize, 
  UserSadhana, 
  Verse, 
  Chapter 
} from './types/gita';
import { CHAPTERS_DATA } from './data/chapters';
import { VERSES_DATA } from './data/verses';
import { 
  getStoredSadhana, 
  saveSadhana, 
  getStoredTheme, 
  saveTheme, 
  getStoredFontStyle, 
  saveFontStyle, 
  getStoredFontSize, 
  saveFontSize 
} from './services/storage';
import { soundscape } from './services/ambientAudio';

import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { SlokaReader } from './components/SlokaReader';
import { ChapterDrawer } from './components/ChapterDrawer';
import { KrishnaCounselModal } from './components/KrishnaCounselModal';
import { CardExportModal } from './components/CardExportModal';
import { SadhanaTrackerModal } from './components/SadhanaTrackerModal';
import { ProMonetizationModal } from './components/ProMonetizationModal';
import { ThemeSettingsModal } from './components/ThemeSettingsModal';
import { ReflectionNoteModal } from './components/ReflectionNoteModal';
import { AudioSoundscapeBar } from './components/AudioSoundscapeBar';
import { ArrowLeft, ArrowRight, BookOpen, Crown, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export function App() {
  // Theme & Reading Preferences State
  const [theme, setTheme] = useState<ThemeMode>(getStoredTheme);
  const [fontStyle, setFontStyle] = useState<FontStyle>(getStoredFontStyle);
  const [fontSize, setFontSize] = useState<FontSize>(getStoredFontSize);

  // Sadhana (Progress, Streaks, Reflections) State
  const [sadhana, setSadhana] = useState<UserSadhana>(getStoredSadhana);

  // Active Chapter Navigation (default to Chapter 2: Sankhya Yoga)
  const [currentChapterNumber, setCurrentChapterNumber] = useState<number>(2);

  // Ambient Audio State
  const [isAmbientPlaying, setIsAmbientPlaying] = useState<boolean>(false);

  // Modals Visibility
  const [isChapterDrawerOpen, setIsChapterDrawerOpen] = useState<boolean>(false);
  const [isCounselModalOpen, setIsCounselModalOpen] = useState<boolean>(false);
  const [isSadhanaModalOpen, setIsSadhanaModalOpen] = useState<boolean>(false);
  const [isProModalOpen, setIsProModalOpen] = useState<boolean>(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);

  // Active items for item-specific modals
  const [exportCardVerse, setExportCardVerse] = useState<Verse | null>(null);
  const [reflectionVerse, setReflectionVerse] = useState<Verse | null>(null);

  // Apply Theme CSS Class to document root
  useEffect(() => {
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${theme}`);
    saveTheme(theme);
  }, [theme]);

  // Handle Font Style
  const handleSelectFontStyle = (style: FontStyle) => {
    setFontStyle(style);
    saveFontStyle(style);
  };

  // Handle Font Size
  const handleSelectFontSize = (size: FontSize) => {
    setFontSize(size);
    saveFontSize(size);
  };

  // Toggle Ambient Soundscape
  const handleToggleAmbient = () => {
    if (isAmbientPlaying) {
      soundscape.stopAll();
      setIsAmbientPlaying(false);
    } else {
      soundscape.startTanpura(0.6);
      soundscape.startGangaRiver(0.3);
      soundscape.startPeriodicBells(14, 0.4);
      setIsAmbientPlaying(true);
    }
  };

  // Toggle Bookmark
  const handleToggleBookmark = (verseId: string) => {
    setSadhana(prev => {
      const exists = prev.bookmarkedVerseIds.includes(verseId);
      const updated = exists
        ? prev.bookmarkedVerseIds.filter(id => id !== verseId)
        : [...prev.bookmarkedVerseIds, verseId];
      
      const newSadhana = { ...prev, bookmarkedVerseIds: updated };
      saveSadhana(newSadhana);
      return newSadhana;
    });
  };

  // Mark verse as read
  const handleMarkRead = (verseId: string) => {
    setSadhana(prev => {
      if (prev.readVerseIds.includes(verseId)) return prev;
      const newRead = [...prev.readVerseIds, verseId];
      const newSadhana = {
        ...prev,
        readVerseIds: newRead,
        versesReadCount: newRead.length
      };
      saveSadhana(newSadhana);
      return newSadhana;
    });
  };

  // Save reflection note
  const handleSaveReflection = (verseId: string, note: string) => {
    setSadhana(prev => {
      const updatedReflections = { ...prev.reflections };
      if (!note.trim()) {
        delete updatedReflections[verseId];
      } else {
        updatedReflections[verseId] = note;
      }
      const newSadhana = { ...prev, reflections: updatedReflections };
      saveSadhana(newSadhana);
      return newSadhana;
    });
  };

  // Handle Pro upgrade
  const handleUpgradeSuccess = (tier: 'seeker' | 'sadhak' | 'patron') => {
    setSadhana(prev => {
      const newSadhana: UserSadhana = {
        ...prev,
        isPro: true,
        proTier: tier,
        proActivatedAt: new Date().toISOString()
      };
      saveSadhana(newSadhana);
      return newSadhana;
    });
    setTimeout(() => {
      setIsProModalOpen(false);
    }, 1200);
  };

  // Jump to verse from search or AI counsel
  const handleSelectVerseFromExternal = (verseId: string) => {
    const parts = verseId.split('.');
    const chNum = parseInt(parts[0], 10);
    if (!isNaN(chNum)) {
      setCurrentChapterNumber(chNum);
    }
    // Scroll to verse element smoothly
    setTimeout(() => {
      const el = document.getElementById(`sloka-${verseId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };

  const currentChapter = CHAPTERS_DATA.find(c => c.number === currentChapterNumber) || CHAPTERS_DATA[1];

  // Filter verses for this chapter
  const chapterVerses = VERSES_DATA.filter(v => v.chapterNumber === currentChapterNumber);

  // If a chapter has no iconic sample verses yet, provide context
  const hasSpecificVerses = chapterVerses.length > 0;

  return (
    <div className={`min-h-screen bg-parchment-grain flex flex-col font-${fontStyle} transition-colors duration-300 pb-28`}>
      
      {/* Top Navbar */}
      <Navbar 
        currentChapterNumber={currentChapterNumber}
        onOpenChapterDrawer={() => setIsChapterDrawerOpen(true)}
        onOpenCounselModal={() => setIsCounselModalOpen(true)}
        onOpenSadhanaModal={() => setIsSadhanaModalOpen(true)}
        onOpenProModal={() => setIsProModalOpen(true)}
        onOpenSettingsModal={() => setIsSettingsModalOpen(true)}
        theme={theme}
        onSelectTheme={setTheme}
        fontStyle={fontStyle}
        onSelectFontStyle={handleSelectFontStyle}
        isAmbientPlaying={isAmbientPlaying}
        onToggleAmbient={handleToggleAmbient}
        sadhana={sadhana}
      />

      {/* Main Sanctuary Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        
        {/* Chapter Hero Banner */}
        <HeroBanner 
          chapter={currentChapter}
          onJumpToFirstVerse={() => {
            const firstVerse = chapterVerses[0];
            if (firstVerse) {
              const el = document.getElementById(`sloka-${firstVerse.id}`);
              el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          onOpenCounsel={() => setIsCounselModalOpen(true)}
        />

        {/* Verses List / Pothi Scroll */}
        <section aria-label="Sacred Verses" className="space-y-6">
          {hasSpecificVerses ? (
            chapterVerses.map((verse) => (
              <div key={verse.id} id={`sloka-${verse.id}`}>
                <SlokaReader
                  verse={verse}
                  isBookmarked={sadhana.bookmarkedVerseIds.includes(verse.id)}
                  onToggleBookmark={handleToggleBookmark}
                  onOpenCardExport={(v) => setExportCardVerse(v)}
                  onOpenReflectionNote={(v) => setReflectionVerse(v)}
                  hasReflection={Boolean(sadhana.reflections && sadhana.reflections[verse.id])}
                  fontStyle={fontStyle}
                  fontSize={fontSize}
                  onMarkRead={handleMarkRead}
                />
              </div>
            ))
          ) : (
            <div className="p-8 sm:p-12 rounded-3xl border text-center space-y-4"
              style={{
                backgroundColor: 'var(--paper-card)',
                borderColor: 'var(--border-parchment)'
              }}
            >
              <div className="text-3xl">📜</div>
              <h3 className="text-xl font-bold font-devanagari text-amber-900 dark:text-amber-200">
                {currentChapter.nameSanskrit} · {currentChapter.nameEnglish}
              </h3>
              <p className="text-sm font-serif italic max-w-lg mx-auto text-stone-600 dark:text-stone-300 leading-relaxed">
                "{currentChapter.summary}"
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setCurrentChapterNumber(2)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500 text-white hover:bg-amber-600 transition-all shadow-sm"
                >
                  Explore Iconic Verses in Chapter 2 (Sankhya Yoga)
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Chapter Navigation Pagination */}
        <div className="flex items-center justify-between gap-4 py-8 border-t mt-12"
          style={{ borderColor: 'var(--border-parchment)' }}
        >
          <button
            onClick={() => {
              if (currentChapterNumber > 1) {
                setCurrentChapterNumber(c => c - 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            disabled={currentChapterNumber <= 1}
            className="flex items-center gap-2 px-4 sm:px-6 py-3 rounded-2xl border text-xs sm:text-sm font-semibold transition-all disabled:opacity-30 hover:border-amber-500"
            style={{
              backgroundColor: 'var(--paper-surface)',
              borderColor: 'var(--border-parchment)'
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous: Chapter {currentChapterNumber - 1}</span>
            <span className="sm:hidden">Prev Ch.</span>
          </button>

          <button
            onClick={() => setIsChapterDrawerOpen(true)}
            className="px-4 py-2 rounded-full border text-xs font-mono font-bold text-amber-700 dark:text-amber-300"
            style={{
              backgroundColor: 'var(--paper-surface)',
              borderColor: 'var(--border-parchment)'
            }}
          >
            Adhyaya {currentChapterNumber} of 18
          </button>

          <button
            onClick={() => {
              if (currentChapterNumber < 18) {
                setCurrentChapterNumber(c => c + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            disabled={currentChapterNumber >= 18}
            className="flex items-center gap-2 px-4 sm:px-6 py-3 rounded-2xl border text-xs sm:text-sm font-semibold transition-all disabled:opacity-30 hover:border-amber-500"
            style={{
              backgroundColor: 'var(--paper-surface)',
              borderColor: 'var(--border-parchment)'
            }}
          >
            <span className="hidden sm:inline">Next: Chapter {currentChapterNumber + 1}</span>
            <span className="sm:hidden">Next Ch.</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Sacred Footer */}
        <footer className="text-center py-10 space-y-3 opacity-80 text-xs text-stone-500">
          <div className="font-devanagari text-lg text-amber-700 dark:text-amber-400">
            ॐ तत्सदिति श्रीमद्भगवद्गीतासूपनिषत्सु ब्रह्मविद्यायां योगशास्त्रे
          </div>
          <div>
            The Gita Sanctuary · Handcrafted with reverence for seekers across the globe
          </div>
          <div className="flex items-center justify-center gap-4 text-[11px] pt-1">
            <button onClick={() => setIsProModalOpen(true)} className="hover:text-amber-600 transition-colors">
              Patron Membership
            </button>
            <span>•</span>
            <button onClick={() => setIsCounselModalOpen(true)} className="hover:text-amber-600 transition-colors">
              Krishna's Counsel AI
            </button>
            <span>•</span>
            <button onClick={() => setIsSadhanaModalOpen(true)} className="hover:text-amber-600 transition-colors">
              Daily Sadhana
            </button>
          </div>
        </footer>

      </main>

      {/* Persistent Bottom Audio Soundscape Bar */}
      <AudioSoundscapeBar 
        isPlaying={isAmbientPlaying}
        onTogglePlay={handleToggleAmbient}
      />

      {/* Modals & Drawers */}
      <ChapterDrawer 
        isOpen={isChapterDrawerOpen}
        onClose={() => setIsChapterDrawerOpen(false)}
        currentChapterNumber={currentChapterNumber}
        onSelectChapter={(num) => {
          setCurrentChapterNumber(num);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        completedChapters={sadhana.chaptersCompleted}
      />

      <KrishnaCounselModal 
        isOpen={isCounselModalOpen}
        onClose={() => setIsCounselModalOpen(false)}
        onSelectVerse={handleSelectVerseFromExternal}
      />

      <CardExportModal 
        isOpen={Boolean(exportCardVerse)}
        onClose={() => setExportCardVerse(null)}
        verse={exportCardVerse}
        theme={theme}
      />

      <SadhanaTrackerModal 
        isOpen={isSadhanaModalOpen}
        onClose={() => setIsSadhanaModalOpen(false)}
        sadhana={sadhana}
        onSelectVerse={handleSelectVerseFromExternal}
      />

      <ProMonetizationModal 
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
        sadhana={sadhana}
        onUpgradeSuccess={handleUpgradeSuccess}
      />

      <ThemeSettingsModal 
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        theme={theme}
        onSelectTheme={setTheme}
        fontStyle={fontStyle}
        onSelectFontStyle={handleSelectFontStyle}
        fontSize={fontSize}
        onSelectFontSize={handleSelectFontSize}
      />

      <ReflectionNoteModal 
        isOpen={Boolean(reflectionVerse)}
        onClose={() => setReflectionVerse(null)}
        verse={reflectionVerse}
        initialNote={reflectionVerse ? (sadhana.reflections?.[reflectionVerse.id] || '') : ''}
        onSaveNote={handleSaveReflection}
      />

    </div>
  );
}

export default App;
