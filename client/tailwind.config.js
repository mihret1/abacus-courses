/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'450px',
        'mdd':'827px',
         'lgg':'1230px'
      }

    },
  },
  plugins: [],
}