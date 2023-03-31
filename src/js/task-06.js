const input = document.querySelector('#validation-input');
const textLength = input.getAttribute('data-length');

input.addEventListener('blur', onInputLength);

function onInputLength(event) {
    if (event.currentTarget.value.length === Number(textLength)) {
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
        }
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }

}

// if (document.querySelector('.invalid'))