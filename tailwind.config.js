module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF4',
          100: '#CCD6E9',
          200: '#99ADD3',
          300: '#6684BD',
          400: '#335BA7',
          500: '#003366', // Main navy color (replaces green)
          600: '#002952',
          700: '#001F3E',
          800: '#001429',
          900: '#000A15',
        },
        secondary: {
          50: '#fefbf2',
          100: '#fdf7e6',
          200: '#faefcc',
          300: '#f8e7b3',
          400: '#f5df99',
          500: '#F5D580', // Golden accent
          600: '#c4ab66',
          700: '#93804d',
          800: '#625633',
          900: '#312b1a',
        },
        cream: {
          50: '#FFFEFA',
          100: '#FFFDF5',
          200: '#FFFCEB',
          300: '#FFF8D1',
          400: '#FFF5BD',
          500: '#F5F0DC', // Cream background
          600: '#E6E0CA',
          700: '#D7D0B8',
          800: '#C8C0A6',
          900: '#B9B194',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
    },
  },
  // Remove the line-clamp plugin as it's now included by default
  plugins: [],
};
