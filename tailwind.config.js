/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "rgba(33, 105, 127, 0.86)",
      },
      boxShadow: {
        "black-sha": "15px 15px 12px 1px rgba(0,0,0,0.4)",
      }
    },
    fontFamily: {
      navitem: ["Julius Sans One"],
      heading: ["Vollkorn SC"],
      sig: ["Lavishly Yours"],
      para1: ["Kiwi Maru"],
      para2: ["Kanit"],
    },
  },
  plugins: [],
}

