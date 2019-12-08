import { Calculator, Display } from "./calculator.js";

const calc = new Calculator();

let elemNumberBut = document.querySelectorAll(".key-num-btn");
let elemInput = document.querySelector(".display");
let elemDecimal = document.querySelector(".key-decimal");
let elemAC = document.querySelector(".key-clear");
let elemOperator = document.querySelectorAll(".key-operator-btn");
let elemEqual = document.querySelector(".key-equal");

let keyNum = [...elemNumberBut];
let keyOper = [...elemOperator];

let display;

function eventHandlerKeyNum(e) {
    if (display) {
        elemInput.value = elemInput.value + e.target.value;
        if (display.operator === "") {
            display.a = elemInput.value;
        } else {
            if (display.b == 0) {
                display.b = Number(e.target.value);
            } else {
                display.b = display.b + Number(e.target.value);
            }
        }
    } else {
        display = new Display();
        elemInput.value = e.target.value;
        display.isenabled = true;
        display.a = elemInput.value;
    }
}

function eventHandlerOperator(a) {
    if (!!display.b) {
        display.b = 0;
        display.a = elemInput.value;
    }
    display.operator = a.target.value;
    elemInput.value = elemInput.value + a.target.value;
}

function eventHandlerDecimal(e) {
    elemInput.value = elemInput.value + e.target.value;
    if (display) {
        if (display.operator === "") {
            display.a = display.a + e.target.value;
        } else {
            display.b = display.b + e.target.value;
        }
    }
}

function eventHandlerEqual() {
    console.log(display);
    elemInput.value = calculation().toFixed(4);
    //console.log(display);
    if (!!display.operator || !!display.b || !!display.a) {
        return;
    }
    display = false;
}

function eventHandlerAC() {
    elemInput.value = 0;
    display = false;
}

function calculation() {
    let res;
    switch (display.operator) {
        case "+":
            res = calc.sum(display.a, display.b);
            break;
        case "-":
            res = calc.sub(display.a, display.b);
            break;
        case "*":
            res = calc.mul(display.a, display.b);
            break;
        case "/":
            res = calc.div(display.a, display.b);
            break;
    }
    return res;
}

keyOper.forEach(element => {
    element.addEventListener("click", eventHandlerOperator);
});

keyNum.forEach(element => {
    element.addEventListener("click", eventHandlerKeyNum);
});
elemDecimal.addEventListener("click", eventHandlerDecimal);

elemAC.addEventListener("click", eventHandlerAC);

elemEqual.addEventListener("click", eventHandlerEqual);
