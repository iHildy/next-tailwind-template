const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: {
        standard: ["outline-none"],
      },
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: "#fe8f8f",
          200: "#fe7c7c",
          300: "#fd6969",
          400: "#fd5757",
          500: "#fd4444",
          600: "#e43d3d",
          700: "#ca3636",
          800: "#b13030",
          900: "#982929",
        },
        secondary: {
          100: "#8f9afe",
          200: "#7c89fe",
          300: "#6979fd",
          400: "#5768fd",
          500: "#4457fd",
          600: "#3d4ee4",
          700: "#3646ca",
          800: "#303db1",
          900: "#293498",
        },
        background: "#0E1012",
        offwhite: "#CDD3DC",
      },
      boxShadow: {
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
      },
    },
  },
};
