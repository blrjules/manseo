/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        manseo: {
          green: '#004732',
          light: '#F5F7FA',
        },
        loreal: {
          black: '#000000',
        },
        gold: {
          accent: '#D4AF37', // Approximation for gold
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
