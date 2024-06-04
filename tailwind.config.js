/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode using a class
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-blue": "#0057FF",
        "custom-blue2": "#5999ff",
      },
      dropShadow: {
        sky: "0 4px 8px rgba(0, 87, 255, 0.5)", // Custom drop shadow
      },
    },
  },
  plugins: [],
};
