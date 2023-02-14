/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "whiteprimary":"#696969",
        "blackprimary":"#cococo"
      }
    },
  },
  plugins: [],
}
