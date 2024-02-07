"use strict";

const item1 = document.querySelectorAll(".item");

console.log(`Number of categories: ${item1.length}`);

item1.forEach((it) => {
  console.log(`Category: ${it.querySelector("h2").textContent}`);
  console.log(`Elements: ${it.querySelector("ul").children.length}`);
});
