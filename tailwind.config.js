/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fill, minmax(202px, 1fr))",
      },

      colors: {
        background: "#061c25",
        "background--hover": "rgb(0, 102, 128)",
      },
    },
  },
  plugins: [],
};
