/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "secondary" : "#F9F8F4",
        "primaryBG" : "#FCFCFC",
        "gold" : "#b98d58"
      }
    },
  },
  plugins: [require("daisyui")],
}

