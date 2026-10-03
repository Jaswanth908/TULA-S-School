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
        tis: {
          crimson: {
            DEFAULT: '#b90124',
            dark: '#8b001a',
            light: '#d92348',
            subtle: '#ffebee',
            glass: 'rgba(185, 1, 36, 0.15)',
          },
          gold: {
            DEFAULT: '#c09d59',
            light: '#dfc282',
            dark: '#9a7936',
            subtle: '#fbf7ee',
            glow: 'rgba(192, 157, 89, 0.25)',
          },
          teal: {
            DEFAULT: '#60bab1',
            dark: '#007a83',
            light: '#90ccd0',
            subtle: '#bee2e4',
          },
          dark: {
            bg: '#0c0e12',
            card: '#14171f',
            cardHover: '#1c202c',
            border: '#262c3d',
            muted: '#8e98aa',
          },
          light: {
            bg: '#fcfbfa',
            surface: '#f8f5f0',
            card: '#ffffff',
            border: '#e7e2d9',
            muted: '#66615b',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-crimson': '0 0 35px -5px rgba(185, 1, 36, 0.35)',
        'glow-gold': '0 0 35px -5px rgba(192, 157, 89, 0.35)',
        'glow-teal': '0 0 35px -5px rgba(96, 186, 177, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh': 'radial-gradient(at 10% 20%, rgba(185, 1, 36, 0.15) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(96, 186, 177, 0.12) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(192, 157, 89, 0.08) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marqueeRev 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRev: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
