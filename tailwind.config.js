/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./app/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        thisgreen: '#528d4f',
        thisyellow: '#b59e3a',
      }
    },
  },
  plugins: [],
}

