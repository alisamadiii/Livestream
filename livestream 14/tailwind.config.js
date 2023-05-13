/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('https://tailwindui.com/img/beams-pricing.png')",
      },
    },
  },
  plugins: [],
};
