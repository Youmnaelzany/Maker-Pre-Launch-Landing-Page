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
      },
      lineHeight: {
        '12': '3.5rem',
      },
      fontSize: {
        sm: '0.9375rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      width: {
        '128': '27rem',
      },
      height: {
        '128': '26rem',
      }
    },
  },
  plugins: [],
}

