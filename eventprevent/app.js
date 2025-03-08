const form = document.querySelector("#form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");
const catat = document.querySelector("#catatan");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const noteValue = input.value;
  const newList = document.createElement("li");
  const newCatat = document.createElement("li");

  newList.innerText = noteValue;
  newCatat.innerText = noteValue;
  list.appendChild(newList);
  catat.appendChild(newCatat);

  input.value = "";
});
