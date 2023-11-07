/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customgrey: "#7e7e7e",
        bodycolour: "#f5f5f5",
        primarycolour: "#6c63ff",
        hoverprimarycolour: "#7091d8",
        darkgrey: "#272727",
        darkergrey: "#1d1929",
        lightgrey: "#888888",
        lightgrey2: "#f0f0f0e7",
        customred: "#ff3535",
        barchartbg: "#eaedf7",
        barcharttext: "#7091d8",
        lightorange: "#f7b84b",
        searchbarborder: "#e9e9ea",
        grey6: "#ababab",
        grey7: "#d6d6d6",
        grey8: "#57575a",
        grey9: "#a7a7a72d",
        grey10: "#3b3b3b",
        grey11: "#a7a7a7",
        grey12: "#e2e2e2",
        grey13: "#555",
        white2: "#f7f8fa",
        white3: "#e0e0e0",
        white4: "#fcfcfc",
        red2: "rgb(221, 20, 20)",
        colour1: "#aec8ff31",
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
        0.625: "0.625rem",
        0.68: "0.68rem",
        0.7: "0.7rem",
        0.9: "0.9rem",
      },
      spacing: {
        10.8: "10.8rem",
        0.62: "0.62rem",
        1.1: "1.1rem",
        1.3: "1.3rem",
        0.1: "0.1rem",
        0.2: "0.2rem",
        0.3: "0.3rem",
        0.4: "0.4rem",
        0.6: "0.6rem",
        0.7: "0.7rem",
        2.8: "2.8rem",
        18.9788: "18.9788rem",
        32: "32rem",
        25.5: "25.5rem",
        3.7: "3.7rem",
        3.2: "3.2rem",
        p2: "2%",
        p5: "5%",
        p22: "22%",
        p29: "29%",
        p7: "7%",
        p27: "27%",
        p13: "13%",
        p87: "87%",
        p65: "65%",
        p35: "35%",
        p120: "120%",
        p140: "140%",
        m35: "-35%",
        m140: "-140%",
        m10: "-10%",
        m20: "-20%",
        px3: "3px",
        px15: "15px",
        px17: "17px",
        px26: "26px",
        px150: "150px",
      },
      scale: {
        102: "1.02",
        125: "1.25",
      },
      borderRadius: {
        br50: "50%",
        brp125: "1.25rem",
        0.45: "0.45rem",
        0.625: "0.625rem",
        px3: "3px",
        px5: "5px",
        px10: "10px",
      },
      borderWidth: {
        px1: "1px",
        px2: "2px",
      },
      boxShadow: {
        custom: "0 0 10px rgba(0, 0, 0, 0.411)",
        custom2: "0px 4px 4px 0px rgba(85, 85, 85, 0.25)",
      },
      maxWidth: {
        35.4: "35.4rem",
      },
      minWidth: {
        p120: "120%",
      },
      minHeight: {
        3.7: "3.7rem",
        px150: "150px",
      },
      zIndex: {
        1: "1",
        2: "2",
        5: "5",
        100: "100",
        1000: "1000", //test
      },
      gridTemplateColumns: {
        r21fr: "repeat(2, 1fr)",
        r31fr: "repeat(3, 1fr)",
      },
    },
  },
  plugins: [],
};
