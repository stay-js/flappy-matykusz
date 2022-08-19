/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*', 'index.html'],
  theme: {
    extend: {},
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
