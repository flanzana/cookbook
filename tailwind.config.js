// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors")
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin")

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      gridTemplateColumns: {
        recipeMobile: "1fr",
        recipeDesktop: "1fr 2fr",
      },
    },
    fontFamily: {
      display: ["Poppins", "ui-sans-serif"],
      body: ["Open Sans", "ui-sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"])
    }),
  ],
}
