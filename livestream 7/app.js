const inputElement = document.querySelector("input");
const visible = document.querySelector(".fa-eye");
const notVisible = document.querySelector(".fa-eye-slash");

visible.addEventListener("click", (e) => {
  inputElement.type = "text";
  visible.setAttribute("aria-visible", "false");
  notVisible.setAttribute("aria-visible", "true");
});

notVisible.addEventListener("click", (e) => {
  inputElement.type = "password";
  visible.setAttribute("aria-visible", "true");
  notVisible.setAttribute("aria-visible", "false");
});
