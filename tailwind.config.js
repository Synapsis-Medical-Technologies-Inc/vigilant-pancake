/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
        pink: {
          DEFAULT: '#fe568d',
          light: '#ff7ba6',
          dark: '#d13a6e',
        },
        blue: {
          DEFAULT: '#2e70b3',
          light: '#5596d8',
          dark: '#074a8e',
        },
        dark: '#121722',
        'white-alpha': {
          5: 'rgba(255, 255, 255, 0.05)',
          10: 'rgba(255, 255, 255, 0.1)',
          20: 'rgba(255, 255, 255, 0.2)',
          60: 'rgba(255, 255, 255, 0.6)',
          80: 'rgba(255, 255, 255, 0.8)',
        },
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        'source-sans-pro': ['var(--font-source-sans-pro)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(180deg, #5596d8 0%, #074a8e 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(1, 9, 23, 0) 0%, #030b1b 100%)',
      },
      boxShadow: {
        'card': '0px 12px 28px rgba(9, 9, 9, 0.32)',
        'feature': '0px 4px 20px rgba(136, 136, 136, 1)',
      },
    },
  },
  plugins: [],
};