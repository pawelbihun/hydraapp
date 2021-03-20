//import { construct } from "core-js/fn/reflect";
import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const counter = document.querySelector(".glass__counter--js");
const add = document.querySelector(".button--add--js");
const remove = document.querySelector(".button--remove--js");

let currentAmount = 0;

add.addEventListener("click", () => {
  currentAmount++;
  counter.innerHTML = currentAmount;
});

remove.addEventListener("click", () => {
  if (currentAmount > 0) {
    currentAmount--;
    counter.innerHTML = currentAmount;
  }
});
