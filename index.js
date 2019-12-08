//import {Calculator} from './calculator';

//const calc = new Calculator();

let elemNumberBut = document.querySelectorAll(".key-num-btn");
let elemInput = document.querySelector(".display");
let elemDecimal = document.querySelector(".key-decimal");
let elemAC = document.querySelector(".key-clear");

let keyNum = [...elemNumberBut];

function eventHandlerKeyNum(a) {
    elemInput.value  = Number(elemInput.value + a.target.value);
    console.log(elemInput.value);
}
function eventHandlerDecimal(){
    elemInput.value = elemInput.value + ".";
}
function eventHandlerAC() {
    elemInput.value = 0;
}

keyNum.forEach(element => {
    element.addEventListener('click', eventHandlerKeyNum);
});
elemDecimal.addEventListener('click', eventHandlerDecimal);

elemAC.addEventListener('click', eventHandlerAC);
