const { default: plugin } = require("tailwindcss");

const FONT_FAMILY_BASE = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif",
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        candal: ["Candal", ...FONT_FAMILY_BASE],
        sans: ["Poppins", ...FONT_FAMILY_BASE],
      },
      colors: {
        "light-blue": "#6DD9F3",
        orange: "#F55700",
        primary: "#2D8DE7",
        blue: "#0B4171",
        "dark-blue": "#092157",
        yellow: "#FFBB00",
        green: "#1BC7B7",
        purple: "#3100FF",
        "blue-pastel": "#2D8DE7",
      },
      padding: {
        edge: "5%",
      },
      maxWidth: {
        "8xl": "1920px",
      },
    },
  },
  plugins: [],
};
