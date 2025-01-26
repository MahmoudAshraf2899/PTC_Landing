import rippleui from 'rippleui';

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [rippleui],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
    },
    screens: {
      '2xsm': '375px',
      xsm: '425px',
      '3xl': '2000px',
      
    },
     
  },
};
