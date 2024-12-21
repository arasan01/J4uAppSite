/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00C7BE',
        dark: '#1A1A1A',
      },
    },
  },
  plugins: [],
};