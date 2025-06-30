/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2AAE63', // зелёный стиль Telegram
        telegramBg: '#F3F4F6', // фон как у Telegram Mini App
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'sans-serif'], // тонкий шрифт
      },
    },
  },
  plugins: [],
};
