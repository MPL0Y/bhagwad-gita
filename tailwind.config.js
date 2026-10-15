/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vedic: {
          gold: '#D97706',
          amber: '#F59E0B',
          saffron: '#EA580C',
          crimson: '#991B1B',
          maroon: '#7F1D1D',
          parchment: '#FDFBF7',
          paper: '#F7F4EA',
          ink: '#1E1B18',
          subtle: '#78716C',
          basalt: '#0C0A09',
          twilight: '#181615',
          temple: '#262320',
          celestial: '#090D16',
          nebula: '#1E1B4B'
        }
      },
      fontFamily: {
        devanagari: ['"Rozha One"', '"Tiro Devanagari Sanskrit"', 'serif'],
        serif: ['"Cormorant Garamond"', '"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.35s ease-out forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.2))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(245, 158, 11, 0.6))' },
        }
      }
    },
  },
  plugins: [],
}
