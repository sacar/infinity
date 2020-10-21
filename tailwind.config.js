// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    fontFamily: {
      body: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      animation: {
        "scale-up-tr":
          "scale-up-tr 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "slide-in-left":
          "slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "fade-in":
          "fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      },
      keyframes: {
        "scale-up-tr": {
          "0%": {
            transform: "scale(.5)",
            "transform-origin": "100% 0%",
          },
          to: {
            transform: "scale(1)",
            "transform-origin": "100% 0%",
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-1000px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
