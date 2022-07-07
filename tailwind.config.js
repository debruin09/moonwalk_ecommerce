module.exports = {
  content: ["./public/**/*.html", "./src/**/*.vue"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // "nav-black": "black",
        "at-green": "#286d5d",
        "light-grey": "	#EFEFEF",
        "light-dark": "#333333",
        "at-instagram": "#E1306C",
        "snow-4-3-light": "F2F2F2",
        "at-instagram-light": "#C13584",
      },
    },
    fontFamily: {
      mont: ["Montserrat, sans-serif"],
      roboto: ["Roboto Mono, monospace"],
    },
    flex: {
      1: "1 1 0%",
      2: "2 2 0%",
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        md: "768px",
        sm: "640px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
