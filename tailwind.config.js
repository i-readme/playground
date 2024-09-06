/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBackground: '#ffffff',
        lightText: '#282c34',
        darkBackground: '#282c34',
        darkText: '#ffffff',
      },
    },
  },
  plugins: [],
};
