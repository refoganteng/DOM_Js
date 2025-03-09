const form = document.querySelector("#form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");
const catat = document.querySelector("#catatan");

input.addEventListener("change", (e) => {
  console.log("Nilai berubah");
});

input.addEventListener("input", (e) => {
  document.querySelector("h1").innerText = input.value;
  console.log("Nilai berubah2");
});

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

list.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
});
