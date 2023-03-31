const form = document.querySelector('.login-form');
form.addEventListener("submit", onSubmit);


function onSubmit(event) {
    event.preventDefault();
    console.dir(event.currentTarget.elements);
}