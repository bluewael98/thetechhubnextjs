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

},
  plugins: [],
}
