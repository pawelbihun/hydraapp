import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const counter = document.querySelector('.glass__counter--js');
const add = document.querySelector('.button--add--js');
const remove = document.querySelector('.button--remove--js');

let amount = 0;

add.addEventListener('click', (e) => {
    amount++;
    counter.innerHTML = amount;
})