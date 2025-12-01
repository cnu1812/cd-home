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
          sans: ['Inter', 'sans-serif'], // Ensure you have a clean font
        }
      },
    },
    plugins: [],
  }