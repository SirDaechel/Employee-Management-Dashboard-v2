/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customgrey: "#7e7e7e",
        bodycolour: "#f5f5f5",
        primarycolour: "#6c63ff",
        darkgrey: "#272727",
        lightgrey: "#888888",
        customred: "#ff3535",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        openSans: "'Open Sans', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
      fontSize: {
        0.83: "0.83rem",
        1.2: "1.2rem",
        1.65: "1.65rem",
        0.68: "0.68rem",
        0.7: "0.7rem",
      },
      spacing: {
        1.5: "1.5rem",
        10.8: "10.8rem",
        0.62: "0.62rem",
        1.1: "1.1rem",
        0.7: "0.7rem",
        2.8: "2.8rem",
        p13: "13%",
        p87: "87%",
        m35: "-35%",
      },
      borderRadius: {
        br50: "50%",
      },
    },
  },
  plugins: [],
};
