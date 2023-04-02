function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector("body");
const button = document.querySelector(".change-color");
// console.log(button)

button.addEventListener("click", onBodyChangeColor); 

function onBodyChangeColor() {
  body.style.background = getRandomHexColor();
}