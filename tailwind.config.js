/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF6E9",
        orange: "#FF7F3E",
        blue: "#80C4E9",
        purple: "#604CC3",
      },
    },
  },
  plugins: [],
};
