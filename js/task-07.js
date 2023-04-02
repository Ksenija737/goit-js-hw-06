const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
// console.log(text)

input.addEventListener("input", onInputGhangeFonts);

function onInputGhangeFonts() {
    text.style.fontSize = `${input.value}px`;
}