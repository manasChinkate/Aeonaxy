/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'iphone': '390px',
        // => @media (min-width: 992px) { ... }
      }
    },
    colors: {
      'gree': '#F5F5F5',
      'hovering': '#ECECEC',
      'light': {
        '300': '#A5A5A5',
        '400': '#7F7F7F'
      },
      'footer': '#E8E8E8',
      'span': '#E9C1B1',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [],
}

