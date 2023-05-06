/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "body-dark":
          "url('https://tailwindcss.com/_next/static/media/blog-post-form-dark@90.5b274bea.jpg')",
        "body-light": "url('https://tailwindui.com/img/beams-home@95.jpg')",
      },
    },
  },
  plugins: [],
};

// Image: https://tailwindcss.com/_next/static/media/blog-post-form-dark@90.5b274bea.jpg
