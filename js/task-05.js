const InputEl = document.querySelector('#name-input');

const OutputEl = document.querySelector('#name-output');

InputEl.addEventListener('input', onInput);

function onInput(evt) {

    if (InputEl.value === "") {
        OutputEl.textContent = "Anonymous";
    } else OutputEl.textContent = InputEl.value;
};

