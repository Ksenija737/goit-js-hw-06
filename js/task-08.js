const form = document.querySelector('.login-form');
form.addEventListener("submit", onSubmit);


function onSubmit(event) {
    event.preventDefault();
    // console.log(event.currentTarget.elements);
    const { email, password } = event.currentTarget.elements;

    
    if (email.value === "" || password.value === "") {
       return alert("Будь ласка, заповніть всі поля форми");
    
    }
    const data = {
        email: email.value,
        password: password.value
    }
    console.log(data);

    form.reset();
}

