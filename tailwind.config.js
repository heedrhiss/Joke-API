/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage:{
        'joker': 'url(./assets/hahaha.jpg)'
      }
    },
  },
  plugins: [],
}

