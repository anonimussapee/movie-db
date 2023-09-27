/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {},
    screens:{
      'smMin' : {'min': '320px'},
      'smMax' : {'max': '600px'},
      'lgMin' : {'min': '601px'},
      'lgMax' : {'max': '800px'},
      'xlMin' : {'min': '801px'},

    }
  },
  plugins: [],
}