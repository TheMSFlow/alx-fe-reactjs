/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      screens: {
        'sm': '430px', // => @media (min-width: 430px) { ... }
      }
    },
  },
  plugins: [],
}

