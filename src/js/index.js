//import { construct } from "core-js/fn/reflect";
import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const counter = document.querySelector(".glass__counter--js");
const add = document.querySelector(".button--add--js");
const remove = document.querySelector(".button--remove--js");
const key = new Date().toLocaleString().slice(0, 10);
let currentAmount = 0;

const localStorageValue = localStorage.getItem(key);
if (localStorageValue) {
  currentAmount = localStorageValue;
} else {
  localStorage.setItem(key , 0);
}
counter.innerHTML = currentAmount;


add.addEventListener("click", () => {
  currentAmount++;
  counter.innerHTML = currentAmount;
  localStorage.setItem(key, currentAmount);
});
remove.addEventListener("click", () => {
  if (currentAmount > 0) {
    currentAmount--;
    counter.innerHTML = currentAmount;
    localStorage.setItem(key, currentAmount);
  }
});
