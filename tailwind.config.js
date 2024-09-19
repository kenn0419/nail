/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/images/banner.jpg')",
        'letter': "url('/src/images/new_letter_banner.jpg')"
      }
    },
    width: {
      main: "1220px",
      "sub-main": "1144px"
    },
    colors: {
      main: '#C19847'
    },
    backgroundColor: {
      main: '#C19847',
      'sub-main': '#d5effb'
    },
    fontFamily: {
      banner: "'Playfair Display', serif",
      'poppins': '"Poppins", sans-serif',
    }
  },
  plugins: [],
}