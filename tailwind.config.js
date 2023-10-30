/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customgrey: "#7e7e7e",
        bodycolour: "#f5f5f5",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        openSans: "'Open Sans', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
      fontSize: {
        0.83: "0.83rem",
      },
      spacing: {
        10.8: "10.8rem",
        0.62: "0.62rem",
        p13: "13%",
        p87: "87%",
      },
    },
  },
  plugins: [],
};
