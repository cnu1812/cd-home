/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00bcd4',
          light: '#aefeff',
          glow: '#5ed3e0',
        },
        dark: {
          bg: '#050b14',
          card: '#0a1625'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        mono: ['Fira Code', 'monospace'], // Added mono for the HUD
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite', // <--- Added for Scrollbar HUD
      },
    },
  },
  plugins: [],
}