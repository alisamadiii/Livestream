const divContainer = document.querySelector("div");
const image = document.querySelector("img");
const section = document.querySelector("section");

image.addEventListener("dragstart", (event) => {
  console.log("I am being dragged");
});

section.addEventListener("drop", (event) => {
  section.append(image);
});

divContainer.addEventListener("drop", (event) => {
  if (event.target === section) {
    section.append(image);
  } else {
    divContainer.append(image);
  }
});

divContainer.addEventListener("dragover", (event) => {
  event.preventDefault();
});

section.addEventListener("dragover", (event) => {
  event.preventDefault();
});
