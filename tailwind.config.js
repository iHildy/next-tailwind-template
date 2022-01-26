const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1700px",
      },
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
        // freXWideReg: ["freXWideReg", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryLight: "#0E1012",
        primary: "#0E1012",
        primaryDark: "#0E1012",
        background: "#0E1012",
        offwhite: "#CDD3DC",
        current: "currentColor",
        // primary: {
        //   100: "#8f9afe",
        //   200: "#7c89fe",
        //   300: "#6979fd",
        //   400: "#5768fd",
        //   500: "#4457fd",
        //   600: "#3d4ee4",
        //   700: "#3646ca",
        //   800: "#303db1",
        //   900: "#293498",
        // },
      },
    },
  },
};
