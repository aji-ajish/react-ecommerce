/** @type {import('tailwindcss').Config} */
const AnimateCSS = require('animated-tailwindcss')
module.exports = AnimateCSS({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sx: "464px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': '1536px',
      '3xl':'2560px'
    },
    extend: {},
    fontFamily: {
      'nunito': ['Nunito'],
      'love': ['Love Ya Like A Sister'],
      'agbalumo': ['Agbalumo'],
      'poppins': ['Poppins']
    },
  },
  plugins: [
  ],
})