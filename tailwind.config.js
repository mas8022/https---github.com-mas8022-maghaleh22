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
    extend: {
      screens: {
        xxm: "380px",
        xm: "500px",
        sm: "640px",
        md: "768px",
        ld: "1000px",
        lg: "1024px",
        lgg: "1112px",
        xl: "1280px",
        xxl: "1312px",
        "2xl": "1536px",
      },
      colors: {
        first: "#ffffff",
        second: "#f97316",
      },
      fontFamily: {
        bold: "yekBold",
        medium: "yekRegular",
        light: "yekThin",
      },
    },
  },
  plugins: [
    nextui(),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
