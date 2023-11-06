/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        'main-bg': '#2a3447',
        'soft-bg': '#384356',
        'dark-bg': '#222b3c',
      },
      colors: {
        'main-color': '#fff',
        'soft-color': '#ddd',
        'dark-color': '#2a3447'
      },
      borderColor: {
        'soft-bg': '#384356',
      }

    },
  },
  plugins: [],
}

