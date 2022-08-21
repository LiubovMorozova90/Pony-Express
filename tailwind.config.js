const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        greenbasic: '#00833E',
        lightgreen: '#6CBE37',
        white: '#FFFFFF',
        black: '#000000',
        lightgrey: '#d0d0d0',
        aluminum: '#B1B1B1',
        main: '#F5F5F5'
      },
      fontFamily:  {
        circe: 'Circe',
      },
      width: {
        '2000': '2000px',
      },
      height: {
        '800': '800px'
      }
    }
  }
}