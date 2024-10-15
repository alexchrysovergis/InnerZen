/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../htdocs/**/*.html',
    './scss/**/*.scss',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#99CC00',
        'secondary': '#E8E8E8',
        'third': '#434444',
      },
    },
  },
  plugins: [],
}
