//query selectors
let html = document.documentElement;
let modes = document.querySelector(".modes");
let dark = document.querySelector(".black");
let light = document.querySelector(".light");
let num1 = document.querySelector(".num1");
let op = document.querySelector(".op");
let num2 = document.querySelector(".num2");
let num = document.querySelector(".num");
let clear = document.querySelector(".clear");
let sign = document.querySelector(".sign");
let percent = document.querySelector(".percent");
let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");
let multipy = document.querySelector(".multipy");
let divide = document.querySelector(".divide");
let del = document.querySelector(".delete");
let decimal = document.querySelector(".decimal");
let equals = document.querySelector(".equals");

//event functions
let toggleMode = () => {
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

//event listeners

modes.addEventListener("click", toggleMode);

//initializations
html.style.setProperty("--right", "5px");
html.style.setProperty("--left", "unset");
