module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: []
    },
    colors: {
      primary: '#DB3022',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#9B9B9B',
      'gray-light': '#D4D4D4',
      'gray-100': '#F0F1F9',
      special: {
        warning: '#F01F0E',
        success: '#2AA952'
      }
    }
  },
  plugins: []
};
