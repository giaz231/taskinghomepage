/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "usee-blue": "#24527A",
        "usee-grey": "#5DACBD",
      },
    },
  },
  plugins: [require("daisyui")],
};
