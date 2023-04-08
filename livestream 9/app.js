const button = document.querySelector("button");
const paragraph = document.querySelector("p");
const body = document.querySelector("body");

button.addEventListener("click", (event) => {
  const buttonAttribute = button.getAttribute("aria-expanded");

  if (buttonAttribute === "true") {
    paragraph.style.display = "block";
    button.setAttribute("aria-expanded", "false");
  } else if (buttonAttribute == "false") {
    paragraph.style.display = "none";
    button.setAttribute("aria-expanded", "true");
  }
});

body.addEventListener("click", (event) => {
  if (!paragraph.contains(event.target) && event.target !== button) {
    paragraph.style.display = "none";
    button.setAttribute("aria-expanded", "false");
  }
});
