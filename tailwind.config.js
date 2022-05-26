module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        valhalla: "#242636",
        "fire-engine-red": "#C21330",
        "fire-engine-red-hover": "#8C1226",
        "dark-tangerine": "#F79F1B",
        "dark-tangerine-hover": "#D98506",
        "cold-turkey": "#CAB3AF",
        "storm-grey": "#7D7F85",
      },
      colors: {
        valhalla: "#242636",
        "fire-engine-red": "#C21330",
        "dark-tangerine": "#F79F1B",
        "cold-turkey": "#CAB3AF",
        "storm-grey": "#7D7F85",
      },
    },
  },
  plugins: [],
};
