const todoForm = document.querySelector("form");
const todoInput = document.querySelector("input");
const ul = document.querySelector("#list");

let data = [];

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (todoInput.value.length == 0) return;

  const value = e.target[0].value;

  todoInput.value = "";

  data.push(value);

  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  data.forEach((item) => {
    li.innerHTML = item;
    deleteButton.innerHTML = "Delete";
    deleteButton.value = item;
    li.append(deleteButton);
    ul.appendChild(li);
  });

  deleteButton.addEventListener("click", (e) => {
    li.remove(e.target);
  });
});
