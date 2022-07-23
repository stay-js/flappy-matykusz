/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*', 'index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
    keyframes: {
      block: {
        '0%': { left: '100%' },
        '100%': { left: '-3rem' },
      },
    },
    animation: {
      block: 'block 2s infinite linear',
    },
  },
  plugins: [],
};
