const input = document.querySelector("#input");
const button = document.querySelector("#addButton");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  const inputContent = input.value;
  input.value = "";

  const item = document.createElement("li");
  const text = document.createElement("span");

  item.appendChild(text);
  text.textContent = inputContent;
  text.style.color = "white";
  list.appendChild(item);

  input.focus();

  item.addEventListener("click", () => {
    item.remove();
  });
});
