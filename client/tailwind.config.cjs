/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-logo": "#ffa8ec",
      },
      backgroundImage: (theme) => ({
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      content: {
        fav: "url('./assets/favSized.png')",
        logo: "url('./assets/logo.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
