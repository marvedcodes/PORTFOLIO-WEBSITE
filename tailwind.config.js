/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        body: "#17171F",
        "selected-text": "#83c5be",
        theme: "#006d77",
        nav: "#404053",
        secondary: "#9191a4",
        badge: "#3f3f51",
        "input-border": "#565666",
        input: "#2a2a35",
      },
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
};
