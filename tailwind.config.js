// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif'],
        'poppins': ['"poopins"']
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'bold': 700,
      },
      fontSize: {

        'xxs': '0.6rem',
        // 'sm': '.6rem',
      },
      screens: {
        'xxs': '485px',
        'xs': '540px',
        'sm': '675px',
        'md': '747px',
        'lg': '895px',
        'xl': '1200px',
      },
    },
  },
  plugins: [],
};
