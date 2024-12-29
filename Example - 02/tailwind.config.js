/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Code/index.html'],
  theme: {
    extend: {
      colors:{
        buttons:{
          lightBlue: "#0d6efd",
          lightGray : "#6c757d",
          darkBlue: "#0dcaf0",
          darkGray: "#f8f9fa",
          dark: "#212529",
        },
      },
      fontFamily:{
        roboto: ["Roboto","sans-serif"]
      },
      screens:{
        "large":"991px",
        "medium":"575px",
      }

    },
  },
  plugins: [],
}

