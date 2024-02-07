"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const span = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", (event) => {
  const col = getRandomHexColor();
  bodyColor.style.backgroundColor = col;
  span.textContent = col;
});
