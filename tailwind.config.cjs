/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/src/images/backgroundHome.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}
