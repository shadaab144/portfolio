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
      },
    },
  },
  plugins: [],
};
