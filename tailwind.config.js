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
        lightgrey2: "#f0f0f0e7",
        customred: "#ff3535",
        barchartbg: "#eaedf7",
        barcharttext: "#7091d8",
        lightorange: "#f7b84b",
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
        10.8: "10.8rem",
        0.62: "0.62rem",
        1.1: "1.1rem",
        1.3: "1.3rem",
        0.4: "0.4rem",
        0.7: "0.7rem",
        2.8: "2.8rem",
        32: "32rem",
        25.5: "25.5rem",
        p13: "13%",
        p87: "87%",
        p65: "65%",
        p35: "35%",
        m35: "-35%",
      },
      scale: {
        102: "1.02",
      },
      borderRadius: {
        br50: "50%",
        px10: "10px",
      },
    },
  },
  plugins: [],
};
