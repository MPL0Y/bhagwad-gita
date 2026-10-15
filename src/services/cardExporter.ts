import { Verse, ThemeMode } from '../types/gita';

export type CardFormat = 'story' | 'square' | 'landscape';

export const exportVerseToImage = async (
  verse: Verse,
  format: CardFormat = 'story',
  theme: ThemeMode = 'twilight'
): Promise<string> => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error("Could not initialize canvas context");

  // Determine dimensions
  let width = 1080;
  let height = 1920; // 9:16 for Story
  if (format === 'square') {
    width = 1080;
    height = 1080;
  } else if (format === 'landscape') {
    width = 1200;
    height = 675; // 16:9 for Twitter / LinkedIn
  }

  canvas.width = width;
  canvas.height = height;

  // Background colors based on theme
  let bgColor = '#0F0E0C';
  let cardBg = '#1C1917';
  let textColor = '#F5EBE1';
  let goldColor = '#F59E0B';
  let subColor = '#A8A29E';

  if (theme === 'parchment') {
    bgColor = '#FAF6EE';
    cardBg = '#FFFFFF';
    textColor = '#1C1917';
    goldColor = '#D97706';
    subColor = '#78716C';
  } else if (theme === 'dawn') {
    bgColor = '#FFF7ED';
    cardBg = '#FFEDD5';
    textColor = '#431407';
    goldColor = '#EA580C';
    subColor = '#9A3412';
  } else if (theme === 'cosmic') {
    bgColor = '#090D16';
    cardBg = '#131A2E';
    textColor = '#F8FAFC';
    goldColor = '#FACC15';
    subColor = '#94A3B8';
  }

  // Draw background gradient
  const grad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width * 0.8);
  grad.addColorStop(0, cardBg);
  grad.addColorStop(1, bgColor);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Draw subtle sacred grid / border
  ctx.strokeStyle = goldColor;
  ctx.globalAlpha = 0.25;
  ctx.lineWidth = 3;
  ctx.strokeRect(40, 40, width - 80, height - 80);
  ctx.strokeRect(55, 55, width - 110, height - 110);
  ctx.globalAlpha = 1.0;

  // Header: Chapter & Verse Badge
  ctx.textAlign = 'center';
  ctx.fillStyle = goldColor;
  ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '6px';
  ctx.fillText(`श्रीमद्भगवद्गीता · CHAPTER ${verse.chapterNumber}, VERSE ${verse.verseNumber}`, width / 2, 130);

  // Sacred Om symbol
  ctx.font = '54px "Rozha One", serif';
  ctx.fillStyle = goldColor;
  ctx.fillText('🕉️', width / 2, 220);

  // Devanagari Sanskrit Verses
  ctx.fillStyle = textColor;
  ctx.font = 'bold 42px "Rozha One", "Tiro Devanagari Sanskrit", serif';
  let currentY = height > 1200 ? 380 : 320;
  verse.devanagari.forEach((line) => {
    ctx.fillText(line, width / 2, currentY);
    currentY += 65;
  });

  // Transliteration
  ctx.fillStyle = subColor;
  ctx.font = 'italic 24px "Cormorant Garamond", Georgia, serif';
  currentY += 20;
  verse.transliteration.forEach((line) => {
    ctx.fillText(line, width / 2, currentY);
    currentY += 38;
  });

  // Ornamental Divider
  currentY += 30;
  ctx.fillStyle = goldColor;
  ctx.font = '22px serif';
  ctx.fillText('❖  •  ❖', width / 2, currentY);
  currentY += 50;

  // English Translation (Wrapped)
  ctx.fillStyle = textColor;
  ctx.font = '500 28px "Plus Jakarta Sans", sans-serif';
  const maxWidth = width - 240;
  const words = verse.translationEnglish.split(' ');
  let line = '';
  const lines: string[] = [];

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      lines.push(line);
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line);

  lines.forEach((l) => {
    ctx.fillText(l.trim(), width / 2, currentY);
    currentY += 44;
  });

  // Core Insight Quote Box
  if (height > 1200) {
    currentY += 40;
    ctx.fillStyle = cardBg;
    ctx.globalAlpha = 0.6;
    ctx.roundRect ? ctx.roundRect(width / 2 - 400, currentY, 800, 110, 16) : ctx.rect(width / 2 - 400, currentY, 800, 110);
    ctx.fill();
    ctx.globalAlpha = 1.0;

    ctx.strokeStyle = goldColor;
    ctx.globalAlpha = 0.4;
    ctx.lineWidth = 1.5;
    ctx.roundRect ? ctx.roundRect(width / 2 - 400, currentY, 800, 110, 16) : ctx.strokeRect(width / 2 - 400, currentY, 800, 110);
    ctx.stroke();
    ctx.globalAlpha = 1.0;

    ctx.fillStyle = goldColor;
    ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText("ESSENCE OF DHARMA", width / 2, currentY + 40);

    ctx.fillStyle = textColor;
    ctx.font = 'italic 20px "Cormorant Garamond", serif';
    ctx.fillText(`"${verse.coreInsight}"`, width / 2, currentY + 75);
  }

  // Footer Watermark
  ctx.fillStyle = subColor;
  ctx.font = '500 18px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText("THE GITA SANCTUARY · READ & CONTEMPLATE", width / 2, height - 80);

  return canvas.toDataURL('image/png');
};
