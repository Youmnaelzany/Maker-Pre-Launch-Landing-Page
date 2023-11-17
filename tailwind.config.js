/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        'ebony': '#080c20',
        'waterloo': '#777f98',
        'regal-blue': '#093f68',
        'scrunchie': '#3ee9e5',
        'radical-red': '#ff2965',
        'white': '#ffffff',
      },
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

