# श्रीमद्भगवद्गीता · The Gita Sanctuary

> **An ethereal, tactile digital sanctuary for Srimad Bhagavad Gita.**  
> Inspired by the sacred, distraction-free craftsmanship of modern scripture apps (such as [@cerealcoklat](https://x.com/cerealcoklat)'s Quran project), but elevated **100x visually** and architected from day one with an ethical, sustainable monetization engine.

---

## 🌟 Vision & Design Philosophy

When reading sacred scriptures in a noisy digital age, typical websites suffer from clinical OLED white-on-black glare, clutter, and uninspired typography. 

The Gita Sanctuary re-imagines digital scripture reading as an **intimate sacred experience**:
- **Tactile Pothi & Manuscript Aesthetics**: Subtle Bhojpatra paper textures, ornamental gold foil accents, and reverence for traditional Vedic layout.
- **Ambient Night Mode ("Lampu Tidur" / Bedside Lamp Atmosphere)**: Instead of harsh sterile white text on black, the Kurukshetra Twilight theme bathes your reading in warm amber oil lamp tones, deep basalt stone, and zero eye fatigue.
- **Interactive Sanskrit Anvaya (पदच्छेद)**: Tap or hover any Sanskrit word to immediately reveal its root (*Dhātu*), grammatical inflection, and direct English meaning.
- **Kinetic Translation Drawer**: The sacred Sanskrit text takes center stage; tapping any sloka lifts open an elegant sliding parchment drawer with English and Hindi translations alongside legendary commentaries from **Adi Shankaracharya** (Advaita), **Sri Ramanuja** (Bhakti), and **Swami Vivekananda** (Practical Strength).

---

## ✨ Flagship Capabilities

### 1. 🪷 Real-Time Vedic Soundscape Mixer (Web Audio API)
Zero heavy external audio downloads; 100% native browser synthesizer:
- **Sacred Tanpura Drone**: Generative overtone harmonics in traditional Sa-Pa $D_3$ tuning with periodic string plucking.
- **River Ganga Waters**: Modeled pink-noise water currents capturing the gentle waves of the holy river against Varanasi ghats.
- **Temple Brass Bells**: Physically modeled acoustic bells with resonant harmonic decay modes.
- **Shankha Call**: Authentic resonant horn blast of the sacred conch to inaugurate deep contemplation.

### 2. 🧭 The Charioteer's Counsel (Krishna AI Sutra)
Navigate modern existential and practical dilemmas through timeless Gita wisdom:
- **Curated Dilemmas**: Career anxiety & fear of failure, grief & loss, imposter syndrome, toxic anger & resentment, soul burnout, and guilt.
- **Timeless Answers**: Grounded in specific Gita verses with direct one-click navigation to the root sloka.
- **Immediate Sadhana Step**: Actionable behavioral advice to apply immediately in daily life.

### 3. 📸 4K Social Card Studio
Generate breathtaking high-resolution social cards in one click directly in the browser using the HTML5 Canvas API:
- **Formats**: Instagram Stories (9:16), Square Posts (1:1), Twitter/LinkedIn Banners (16:9).
- **Styling**: Radiant gold Devanagari lettering, classical English translation, core insight badge, and atmospheric background.

### 4. 🔥 Daily Sadhana & Habit Tracker
- **Spiritual Streaks**: Gamified daily practice tracking without vanity metrics.
- **700 Verses Progress**: Visual progress bar as you journey across all 18 chapters.
- **Contemplation Journal**: Record and edit personal realizations for each individual sloka.
- **Sacred Bookmarks**: Quick-access collection of your most cherished verses.

### 5. 👑 Built-in Monetization & Patron Engine
Ready to monetize with a high-converting, ethical spiritual patronage model:
- **Seeker ($9/month)**: Full Sanskrit Anvaya + Audio Chanting.
- **Sadhak Annual ($49/year — Most Popular, 55% Off)**: Unlimited AI Counsel, Svadhyaya Chanting Memorizer, 4 Scholarly Commentary Packs, 4K Social Card Studio.
- **Moksha Lifetime Patron ($149 one-time)**: Lifetime updates, name in Patron Hall of Fame, and leather-styled Pothi PDF export.
- **Promo Code Engine**: Test with `MOKSHA50` for an instant 50% discount.
- **Checkout Simulator & License Activator**: Interactive checkout flow with celebratory confetti (`canvas-confetti`) and persistent LocalStorage state.

---

## 🎨 5 Atmospheric Visual Themes

1. **Kurukshetra Twilight (Default)**: Deep basalt `#0E0D0C`, glowing amber `#F59E0B`, warm parchment cream.
2. **Vedic Bhojpatra**: Authentic handmade antique manuscript parchment `#FAF6EE` with vermilion accents.
3. **Brahmamuhurta Dawn**: Sacred sunrise saffron `#FFF8F0` and golden peach dawn glow.
4. **Vaikuntha Jade**: Forest hermitage celadon `#F4F7F4` and sandalwood green.
5. **Vishvarupa Cosmic**: Deep celestial starlight nebula `#080A12` and cosmic dust radiance.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js 18+ (tested on v20.20.2)
- npm 9+

### Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/hardik/bhagwad-gita.git
cd bhagwad-gita

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to explore the sanctuary.

### Production Build & Preview

```bash
# Build production bundle with TypeScript check
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Architecture & Stack

- **Framework**: React 18 + TypeScript + Vite 5
- **Styling**: Tailwind CSS with custom Vedic design tokens and paper grain shaders
- **Audio Engine**: Web Audio API (Native Oscillator, BiquadFilter, GainNode, and BufferSource synthesis)
- **Visual Export**: HTML5 Canvas 4K rendering engine
- **Icons**: Lucide React
- **Animations**: CSS3 hardware-accelerated transforms & Canvas Confetti

---

## 📜 Homage

*ॐ तत्सदिति श्रीमद्भगवद्गीतासूपनिषत्सु ब्रह्मविद्यायां योगशास्त्रे श्रीकृष्णार्जुनसंवादे*  
Dedicated to seekers of truth everywhere.