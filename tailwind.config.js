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
        'letter': "url('/src/images/new_letter_banner.jpg')",
        'service': "url('/src/images/background_service.jpg')"
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
    },
    backgroundImage: {
      'button': "linear-gradient(130deg,#fff69d,#bf8b24,#fff69d,#fff69d,#bb8311,#fff7b3,#e7c74c)"
    }
  },
  plugins: [],
}