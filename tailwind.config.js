/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          bg: '#FAF8F5',
          cream: '#FDFBF7',
          ivory: '#F9F6F0',
          paper: '#FCFBF9',
          gold: {
            light: '#F5E6BE',
            DEFAULT: '#C5A059',
            dark: '#9A7836',
            shimmer: '#E8D49E',
            border: '#DFC99E'
          },
          rose: '#D4A373',
          text: {
            primary: '#2D2825',
            secondary: '#5C544F',
            muted: '#8C827A',
            gold: '#A77D37'
          }
        }
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(184, 134, 11, 0.15)',
        'envelope': '0 20px 40px -10px rgba(0, 0, 0, 0.18)',
        'glow-gold': '0 0 25px rgba(223, 201, 158, 0.6)'
      }
    },
  },
  plugins: [],
}

