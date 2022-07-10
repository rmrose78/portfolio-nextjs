/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      maxHeight: {
        128: "60vh",
      },
      colors: {
        "dm-primary": "hsl(203, 30%, 30%)",
        "dm-secondary": "hsl(34, 30%, 10%)",
        "dm-tertiary": "hsl(39, 100%, 75%)",
        "dm-text-primary": "hsl(190, 30%, 85%)",
        "dm-text-secondary": "hsl(210, 30%, 60%)",
        "lm-primary": "hsl(203, 5%, 70%)",
        "lm-secondary": "hsl(34, 5%, 80%)",
        "lm-tertiary": "hsl(39, 20%, 20%)",
        "lm-text-primary": "hsl(190, 30%, 20%);",
        "lm-text-secondary": "hsl(210, 30%, 40%)",
      },
    },
  },
  borderWidth: {
    DEFAULT: "0.5px",
    1: "1px",
  },
  plugins: [],
};
