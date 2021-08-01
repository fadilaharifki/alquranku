module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#BAA333',
      },
      screens: {
        'theme-s-sm': { 'max': '630px' }
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
