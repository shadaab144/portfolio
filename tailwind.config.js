/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        steel: {
          400: '#6a9ec7',
          500: '#4d8bb5',
          600: '#3a7aa3',
        },
        crimson: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        gold: {
          400: '#fbbf24',
          500: '#d4a017',
          600: '#b8860b',
        },
      },
    },
  },
  plugins: [],
};
