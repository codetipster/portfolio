/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "dark-purple": "#081A51",
        "light-white": "rgba(255, 255, 255,0.17)"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}


