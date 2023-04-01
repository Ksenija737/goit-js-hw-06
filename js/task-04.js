const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener("click", onDecrement);

function onDecrement() {
    counterValue -= 1;
    value.textContent = counterValue;
}

incrementBtn.addEventListener('click', onIncrement);

function onIncrement() {
    counterValue += 1;
    value.textContent = counterValue;
}
