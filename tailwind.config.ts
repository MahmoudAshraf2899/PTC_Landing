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
    extend: {
      colors: {
        background: {
          light: "#ffffff",
          dark: "#0a0a0a",
        },
      },
    },
    screens: {
      xs: "300px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
     
  },
};
