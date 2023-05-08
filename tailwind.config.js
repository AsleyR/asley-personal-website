/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "bggray": "#f2f2f2"
      },
      padding: {
        "normalx": "10rem",
        "mobilex": "2rem"
      },
      margin: {
        "normalx": "10rem",
        "mobilex": "2rem"
      }
    },
  },
  plugins: [],
}
