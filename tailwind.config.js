/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        verde: { //criar
          200: '#acef75',
          300: '#91EE77',
          900: '#16281F',
          950: '#0F1C15',
        },
        green: { //sobrescrever
          300: '#91EE77', //...
        }
      },
      spacing: {
        22: '5.5rem'
      },
      fontSize: {
        '2xs': '.5rem',
      }
    },
  },
  plugins: [],
}

