import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FAF7F2',
        rose: '#E8D5D0',
        champagne: '#D4AF37',
        charcoal: '#2D2D2D',
        gold: '#C9A962',
      },
    },
  },
  plugins: [],
};

export default config;