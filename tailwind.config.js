/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        logo: "url('./app/img/Logo.jpeg')",
        avengers: "url('./app/img/Avengers.png')",
        guardians: "url('./app/img/Guardians of The Galaxy.png')",
        spiderman: "url('./app/img/SpiderMan.png')",
        tenet: "url('./app/img/Tenet.png')",
        knives_out: "url('./app/img/KnivesOut.png')",
      },

    },
  },
  plugins: [],
}

