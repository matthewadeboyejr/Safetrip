/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass"],
      },
      colors: {
        "msp-blue": "#01377D",
        "msp-yellow": "#FFC10A",
        "msp-black": "#1A1A1A",
        "msp-gray-2": "#222222",
      },
    },
  },
  plugins: [],
};
