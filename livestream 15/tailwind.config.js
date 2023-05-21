/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: `linear-gradient(rgba(13, 14, 18, .05) 2px, transparent 2px), linear-gradient(90deg, rgba(13, 14, 18, .05) 1px, transparent 1px);`,
      },
      backgroundSize: {
        pattern: "44px 44px, 44px 44px, 20px 20px, 20px 20px",
      },
      backgroundPosition: {
        pattern: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
      },
      colors: {
        primary: "#666af1",
      },
    },
  },
  plugins: [],
};
