const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const ulAttribute = ul.getAttribute("aria-open");

  if (ulAttribute == "false") {
    ul.setAttribute("aria-open", "true");
    button.setAttribute("aria-expanded", "true");
  } else if (ulAttribute == "true") {
    ul.setAttribute("aria-open", "false");
    button.setAttribute("aria-expanded", "false");
  }
});
