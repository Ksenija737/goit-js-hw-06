const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = '55px';

input.addEventListener("input", onInputGhangeFonts);

function onInputGhangeFonts(evt) {
    // text.style.fontSize = `${input.value}px`;
    // console.dir(evt.currentTarget.valueAsNumber);
    
    text.style.fontSize = `${evt.currentTarget.valueAsNumber}px`;
}