/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-serif': ['Source Serif Pro', 'serif']
      },
      colors: {
        'gray-bg': "#f2f2f2"
      }
    },
  },
  plugins: [],
}
