import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: '#1c1917',
        'accent-zara': '#c2856a',
        'accent-uniqlo': '#5a7d8f',
        warm: {
          bg: '#faf9f7',
          border: '#e5e0d8',
          muted: '#78716c',
        },
      },
    },
  },
  plugins: [],
};

export default config;
