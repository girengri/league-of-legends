/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
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
};
