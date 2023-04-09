/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#021117",
          secondary: "#CFFAFE",
          tertiary: "#083344",
          "black-100": "#021117",
          "black-200": "#01070A",
          "white-100": "#ECFEFF",
        },
        boxShadow: {
          card: "0px 35px 120px -15px #05222E",
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/herobg.png')",
        },
      },
    },
    plugins: [],
  };