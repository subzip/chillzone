/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        button: "0px 4px 10px 0px rgba(255, 249, 0, 0.5)",
      },
      backgroundImage: {
        line: "url(https://i.1.creatium.io/83/25/e5/f7730e80313c0a0771441541285a2bf6c3/Vector%201.png)",
      },
    },
    colors: {
      transparent: "transparent",
      yellow: "rgb(255, 241, 0)",
      white: "#ffffff",
      black: "black",
      gray: "#959595",
      green: "#1b5438",
      blue: "#1f4ea0",
      red: "#841115",
      darkgray: "#373737",
      pink: "#ee105a",
      lightgray: "#cdcdcd",
      lightgreen: "#4f7b60",
      light: "#9a9a9a",
    },
    fontFamily: {
      sans: ["Roboto"],
    },
  },
  plugins: [],
};
