import { UserSadhana, ThemeMode, FontStyle, FontSize } from '../types/gita';

const SADHANA_STORAGE_KEY = 'gita_sanctuary_sadhana';
const THEME_STORAGE_KEY = 'gita_sanctuary_theme';
const FONT_STYLE_STORAGE_KEY = 'gita_sanctuary_font_style';
const FONT_SIZE_STORAGE_KEY = 'gita_sanctuary_font_size';

const defaultSadhana: UserSadhana = {
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  versesReadCount: 3,
  readVerseIds: ["1.1", "2.14", "2.47"],
  bookmarkedVerseIds: ["2.47", "18.66"],
  chaptersCompleted: [1],
  reflections: {
    "2.47": "My anchor for when work anxiety hits. Focus on the art, release the metric."
  },
  isPro: false,
};

export const getStoredSadhana = (): UserSadhana => {
  try {
    const raw = localStorage.getItem(SADHANA_STORAGE_KEY);
    if (!raw) return defaultSadhana;
    const parsed = JSON.parse(raw);
    
    // Check and update streak
    const today = new Date().toISOString().split('T')[0];
    const lastActive = parsed.lastActiveDate;
    if (lastActive && lastActive !== today) {
      const lastDate = new Date(lastActive);
      const currentDate = new Date(today);
      const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        parsed.streakDays = (parsed.streakDays || 0) + 1;
      } else if (diffDays > 1) {
        parsed.streakDays = 1;
      }
      parsed.lastActiveDate = today;
      localStorage.setItem(SADHANA_STORAGE_KEY, JSON.stringify(parsed));
    }
    return parsed;
  } catch {
    return defaultSadhana;
  }
};

export const saveSadhana = (sadhana: UserSadhana): void => {
  try {
    localStorage.setItem(SADHANA_STORAGE_KEY, JSON.stringify(sadhana));
  } catch (e) {
    console.error("Failed to save sadhana to localStorage", e);
  }
};

export const getStoredTheme = (): ThemeMode => {
  try {
    return (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || 'twilight';
  } catch {
    return 'twilight';
  }
};

export const saveTheme = (theme: ThemeMode): void => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
};

export const getStoredFontStyle = (): FontStyle => {
  try {
    return (localStorage.getItem(FONT_STYLE_STORAGE_KEY) as FontStyle) || 'serif';
  } catch {
    return 'serif';
  }
};

export const saveFontStyle = (style: FontStyle): void => {
  try {
    localStorage.setItem(FONT_STYLE_STORAGE_KEY, style);
  } catch {}
};

export const getStoredFontSize = (): FontSize => {
  try {
    return (localStorage.getItem(FONT_SIZE_STORAGE_KEY) as FontSize) || 'large';
  } catch {
    return 'large';
  }
};

export const saveFontSize = (size: FontSize): void => {
  try {
    localStorage.setItem(FONT_SIZE_STORAGE_KEY, size);
  } catch {}
};
