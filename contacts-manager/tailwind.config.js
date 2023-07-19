/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: `#0d6a49`,
        light: `#d3e5e2`,
        warning: `#ffbb00`,
        sucsses: "#006dff",
        error: "#f44240",
      },
    },
  },
  plugins: [],
};
