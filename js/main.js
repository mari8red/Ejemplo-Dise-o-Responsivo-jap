// Este script tiene la única funcionalidad de agregar cuadrados a la página de forma dinámica

const items = document.querySelector(".flex-container");

for (let i = 1; i <= 20; i++) {
  const square = document.createElement("div");
  square.appendChild(document.createTextNode(i));
  square.classList.add("square");
  items.appendChild(square);
}
