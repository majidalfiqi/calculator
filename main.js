// query selectors
const html = document.documentElement;
const modes = document.querySelector(".modes");
const dark = document.querySelector(".black");
const light = document.querySelector(".light");
const num1 = document.querySelector(".num1");
const op = document.querySelector(".op");
const num2 = document.querySelector(".num2");
const result = document.querySelector(".result");
const num = document.querySelectorAll(".num");
const symbol = document.querySelectorAll(".symbol");
const clear = document.querySelector(".clear");
const sign = document.querySelector(".sign");
const percent = document.querySelector(".percent");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const del = document.querySelector(".delete");
const decimal = document.querySelector(".decimal");
const equals = document.querySelector(".equals");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

// event functions
// dark mode
const toggleMode = () => {
  html.classList.toggle("dark");
  dark.classList.toggle("text-gray-400");
  dark.classList.toggle("dark:text-gray-600");
  light.classList.toggle("text-gray-400");
  light.classList.toggle("dark:text-gray-600");
  if (html.style.getPropertyValue("--right") === "5px") {
    html.style.setProperty("--right", "unset");
    html.style.setProperty("--left", "5px");
  } else {
    html.style.setProperty("--right", "5px");
    html.style.setProperty("--left", "unset");
  }
};
// clear
const c = () => {
  clear.classList.add("clicked");
  clear.classList.add("dark:clicked");
  setInterval(() => clear.classList.remove("clicked"), 500);
  setInterval(() => clear.classList.remove("dark:clicked"), 500);
  num1.textContent = "";
  op.textContent = "";
  num2.textContent = "";
  first = "";
  second = "";
  arr1 = [];
  arr2 = [];
  operation = "";
  final = "";
  result.textContent = "0";
};
// sign change
const posneg = () => {
  if (operation === "") {
    if (first !== "" && first !== "0") {
      if (arr1[0] !== "-") arr1.unshift("-");
      else arr1.shift();
      first = arr1.join("");
      result.textContent = first;
    }
  } else {
    if (second !== "" && second !== "0") {
      if (arr2[0] !== "-") arr2.unshift("-");
      else arr2.shift();
      second = arr2.join("");
      result.textContent = second;
    }
  }
};
// percent
const pcent = () => {
  if (operation === "") {
    if (first !== "" && first !== "0") {
      first = parseFloat(first) / 100;
      arr1 = [...first.toString()];
      result.textContent = first;
    }
  } else {
    if (second !== "" && second !== "0") {
      second = parseFloat(second) / 100;
      arr2 = [...second.toString()];
      result.textContent = second;
    }
  }
};
// symbol
const symbolClick = (e) => {
  e.target.classList.add("clicked");
  e.target.classList.add("dark:clicked");
  setInterval(() => e.target.classList.remove("clicked"), 500);
  setInterval(() => e.target.classList.remove("dark:clicked"), 500);
  if (second === "" && first !== "") {
    if (operation === "") {
      num1.textContent = first;
      result.textContent = "0";
    }
    operation = e.target.outerText;
    op.textContent = operation;
  } else if (!(second === "" && first === "")) {
    if (final !== "∞") {
      num2.textContent = second;
      equals.click();
      first = final.toString().slice();
      num1.textContent = final;
      arr2 = [];
      second = "";
      num2.textContent = "";
      final = "";
      operation = e.target.outerText;
      op.textContent = operation;
    }
  }
};
// equals
const calc = () => {
  equals.classList.add("clicked");
  equals.classList.add("dark:clicked");
  setInterval(() => equals.classList.remove("clicked"), 500);
  setInterval(() => equals.classList.remove("dark:clicked"), 500);
  if (second !== "") {
    num2.textContent = second;
    switch (operation) {
      case "+":
        final = parseFloat(first) + parseFloat(second);
        break;
      case "-":
        final = parseFloat(first) - parseFloat(second);
        break;
      case "×":
        final = parseFloat(first) * parseFloat(second);
        break;
      case "÷":
        if (second === "0") final = "∞";
        else final = parseFloat(first) / parseFloat(second);
        break;
    }
    if (final.toString().length > 10) {
      final = final.toFixed(9 - final.toString().split(".")[0].length);
    }
    result.textContent = final;
  }
};
// backspace
const backspace = () => {
  del.classList.add("clicked");
  del.classList.add("dark:clicked");
  setInterval(() => del.classList.remove("clicked"), 500);
  setInterval(() => del.classList.remove("dark:clicked"), 500);
  if (operation === "") {
    if (arr1.length in [0, 1]) {
      arr1.pop();
      first = arr1.join("");
      result.textContent = "0";
    } else if (arr1.length === 2 && arr1[0] === "-") {
      arr1.pop();
      arr1.pop();
      first = arr1.join("");
      result.textContent = "0";
    } else {
      arr1.pop();
      first = arr1.join("");
      result.textContent = first;
    }
  } else {
    if (arr2.length in [0, 1]) {
      arr2.pop();
      second = arr2.join("");
      result.textContent = "0";
    } else if (arr2.length === 2 && arr2[0] === "-") {
      arr2.pop();
      arr2.pop();
      second = arr2.join("");
      result.textContent = "0";
    } else {
      arr2.pop();
      second = arr2.join("");
      result.textContent = second;
    }
  }
};
// nums
const numClick = (e) => {
  e.target.classList.add("clicked");
  e.target.classList.add("dark:clicked");
  setInterval(() => e.target.classList.remove("clicked"), 500);
  setInterval(() => e.target.classList.remove("dark:clicked"), 500);
  if (final !== "") {
    clear.click();
  }

  if (operation === "") {
    if (arr1.length < 8) {
      if (!(e.target.outerText === "0" && first === "0")) {
        if (arr1[0] === "0" && arr1[1] !== ".") arr1.pop();
        arr1.push(e.target.outerText);
        first = arr1.join("");
        result.textContent = first;
      }
    }
  } else {
    if (arr2.length < 8) {
      if (!(e.target.outerText === "0" && second === "0")) {
        if (arr2[0] === "0" && arr2[1] !== ".") arr2.pop();
        arr2.push(e.target.outerText);
        second = arr2.join("");
        result.textContent = second;
      }
    }
  }
};
// period
const period = () => {
  if (final !== "") {
    clear.click();
  }
  if (operation === "") {
    if (!arr1.includes(".")) {
      if (first === "") arr1.push("0");
      arr1.push(".");
      first = arr1.join("");
      result.textContent = first;
    }
  } else {
    if (!arr2.includes(".")) {
      if (second === "") arr2.push("0");
      arr2.push(".");
      second = arr2.join("");
      result.textContent = second;
    }
  }
};
// keyboard input
const keyboard = (e) => {
  switch (e.key) {
    case "0":
      zero.click();
      break;
    case "1":
      one.click();
      break;
    case "2":
      two.click();
      break;
    case "3":
      three.click();
      break;
    case "4":
      four.click();
      break;
    case "5":
      five.click();
      break;
    case "6":
      six.click();
      break;
    case "7":
      seven.click();
      break;
    case "8":
      eight.click();
      break;
    case "9":
      nine.click();
      break;
    case ".":
      decimal.click();
      break;
    case "+":
      add.click();
      break;
    case "-":
      subtract.click();
      break;
    case "*":
      multiply.click();
      break;
    case "/":
      divide.click();
      break;
    case "Backspace":
    case "Delete":
      e.preventDefault();
      del.click();
      break;
    case "Enter":
    case "=":
      e.preventDefault();
      equals.click();
      break;
    case "c":
    case "C":
    case "Escape":
      e.preventDefault();
      clear.click();
      break;
  }
};

// event listeners
modes.addEventListener("click", toggleMode);
window.addEventListener("keydown", keyboard);
clear.addEventListener("click", c);
sign.addEventListener("click", posneg);
percent.addEventListener("click", pcent);
symbol.forEach((s) => s.addEventListener("click", symbolClick));
equals.addEventListener("click", calc);
del.addEventListener("click", backspace);
num.forEach((n) => n.addEventListener("click", numClick));
decimal.addEventListener("click", period);

// initializations
html.style.setProperty("--right", "5px");
html.style.setProperty("--left", "unset");
let arr1 = [];
let arr2 = [];
let first = "";
let second = "";
let final = "";
let operation = "";
