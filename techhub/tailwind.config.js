/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {   background: "#CCCCFF",
      neoyellow: "#F8FF1D",
      neogreen: "#50FFAF",
      neoblue: "#4B69FE"}
    },
    fontFamily: {
      Oswald: ["Oswald", "sans-serif"],
  },
  screens: {
    xxs: "370px",
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1020px",
    lg: "1240px",
    xlg: "1300px",
    xxl: "1700px", 
  },

},
  plugins: [],
}
