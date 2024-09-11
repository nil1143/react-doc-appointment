/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ace1af",
        secondary: "#bbe9be",
        third: "#cbf2cd",
        fourth: "#e3fae4",
        fifth: "#f4faf4",
      },
      gridTemplateColumns: {
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
};
