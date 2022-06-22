/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        128: "60vh",
      },
      colors: {
        "$color-primary": "#2c4b4b",
        "$color-secondary": "#7b4619",
        "$color-tertiary": "#ffd486",
        "$color-test": "#131e1e",
      },
    },
  },
  plugins: [],
};
