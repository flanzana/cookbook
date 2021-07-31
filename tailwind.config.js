// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors")

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
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
  variants: {
    extend: {},
  },
  plugins: [],
}
