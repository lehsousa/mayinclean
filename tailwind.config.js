/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#f3f3fb',
        'primary-green': '#31caa5',
        'dark-blue': '#002f51',
      },
      fontFamily: {
        heading: ['Cooper BT', 'Georgia', 'serif'], 
        body: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
