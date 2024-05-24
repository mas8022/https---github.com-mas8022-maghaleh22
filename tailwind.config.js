const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      dd: "900px",

      lg: "1024px",

      lgg: "1112px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      colors: {
        first: "#ffffff",
        second: "#134e4a",
      },
      fontFamily: {
        bold: "yekBold",
        medium: "yekRegular",
        light: "yekThin",
      },
    },
  },
  plugins: [nextui()],
};
