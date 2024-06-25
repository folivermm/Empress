// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'bold': 700,
      }
    },
  },
  plugins: [],
};
