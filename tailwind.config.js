/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#E7FBF9', // added color
        lightBlue: '#97C3ED', // added color
        weightedGray:'#D9D9D9', //added color
        darkBlue: '#423131', // added color
        whiteRed: '#A86969',
        whitishRed: '#DAC1C1',
        darkGreen:'#6B867D',
        darkBrown:'#292121',
        whitned:'#D9D9D9',
        whiteGreen: '#55B2A3',
        whitishGreen: '#A6D9D0',
        modifiedWhitishGreen: '#A7C9C3'
      },
    },
  },
  plugins: [],
};