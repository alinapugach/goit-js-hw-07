function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document
  .querySelector("button[data-create]")
  .addEventListener("click", (event) => {
    const value1 = document.querySelector("input");
    createBoxes(value1.value);
    value1.value = null;
  });

document
  .querySelector("button[data-destroy]")
  .addEventListener("click", (event) => {
    destroyBoxes();
  });

function createBoxes(amount) {
  let boxes = document.querySelector("#boxes");
  if (amount <= 100) {
    boxes.innerHTML = "";
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const newEl = document.createElement("div");
      newEl.style.width = size + "px";
      newEl.style.height = size + "px";
      newEl.style.backgroundColor = getRandomHexColor();
      boxes.append(newEl);
      size += 10;
    }
  }
}

function destroyBoxes() {
  let boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";
}
