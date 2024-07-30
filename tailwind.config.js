/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#121435",
        white: "#FAF9F0",
        beige: "#EDEBCA",
        orange: "#FF5722",
      },
    },
  },
  plugins: [],
};
