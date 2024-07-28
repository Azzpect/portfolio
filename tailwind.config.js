/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
      }
    },
    fontFamily: {
      navitem: ["Julius Sans One"],
      heading: ["Vollkorn SC"],
      sig: ["Lavishly Yours"],
      para: ["Kanit"],
    },
  },
  plugins: [],
}

