export type Speaker = 'Krishna' | 'Arjuna' | 'Sanjaya' | 'Dhritarashtra';

export interface WordAnalysis {
  sanskrit: string;
  transliteration: string;
  root?: string;
  grammar?: string;
  english: string;
}

export interface Commentary {
  author: 'Adi Shankaracharya' | 'Sri Ramanuja' | 'Swami Vivekananda' | 'Modern Mind & Practical Dharma';
  school: 'Advaita (Non-Dual)' | 'Bhakti (Devotion)' | 'Integral Yoga' | 'Practical Wisdom';
  text: string;
}

export interface Verse {
  id: string; // e.g. "2.47"
  chapterNumber: number;
  verseNumber: number;
  speaker: Speaker;
  devanagari: string[];
  transliteration: string[];
  wordBreakdown: WordAnalysis[];
  translationEnglish: string;
  translationHindi?: string;
  commentaries: Commentary[];
  audioDurationSeconds?: number;
  tags: string[];
  coreInsight: string;
}

export interface Chapter {
  number: number;
  nameSanskrit: string;
  nameTransliteration: string;
  nameEnglish: string;
  verseCount: number;
  summary: string;
  theme: string;
  philosophicalEssence: string;
  keySlokas: string[];
}

export type ThemeMode = 'parchment' | 'twilight' | 'dawn' | 'jade' | 'cosmic';
export type FontStyle = 'serif' | 'sans' | 'traditional';
export type FontSize = 'standard' | 'large' | 'monumental';

export interface AmbientAudioLayer {
  name: string;
  icon: string;
  volume: number; // 0 to 1
  enabled: boolean;
}

export interface UserSadhana {
  streakDays: number;
  lastActiveDate: string;
  versesReadCount: number;
  readVerseIds: string[];
  bookmarkedVerseIds: string[];
  chaptersCompleted?: number[];
  reflections: Record<string, string>; // verseId -> reflection note
  isPro: boolean;
  proTier?: 'seeker' | 'sadhak' | 'patron';
  proActivatedAt?: string;
}

export interface LifeDilemma {
  id: string;
  title: string;
  emotion: string;
  category: 'anxiety' | 'purpose' | 'relationships' | 'duty' | 'inner-peace';
  description: string;
  krishnaResponse: string;
  verseCitations: string[]; // e.g. ["2.47", "2.14"]
  actionStep: string;
}
