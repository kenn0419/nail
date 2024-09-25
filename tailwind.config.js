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
        'service': "url('/src/images/background_service.jpg')",
        team: "url('/src/images/bg_team.png')"
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
      'sub-main': '#BEE68D'
    },
    fontFamily: {
      banner: "'Playfair Display', serif",
      'poppins': '"Poppins", sans-serif',
      pinyon: '"Pinyon Script", cursive',
      gothic: '"Gothic A1", sans-serif'
    },
    backgroundImage: {
      'button': "linear-gradient(130deg,#fff69d,#bf8b24,#fff69d,#fff69d,#bb8311,#fff7b3,#e7c74c)"
    },
    screens: {
      phone: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      tablet: { min: "640px", max: "1023px" },
      // => @media (min-width: 640px) and (max-width: 1023px) { ... }

      laptop: { min: "1024px" },
      // => @media (min-width: 1024px) and (max-width: 1279px) { ... }
    }
  },
  plugins: [],
}