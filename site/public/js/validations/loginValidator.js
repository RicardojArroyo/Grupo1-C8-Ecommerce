let qs = element => {
    return document.querySelector(element)
}

let isInvalid = variable => {
    return variable.style.borderColor = 'red'
}

let isValid = variable => {
    return variable.style.borderColor = 'green'
}

window.addEventListener('load', function() {
    let $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $form = qs('#form'),
    $password = qs('#password'),
    $passwordErrors = qs('#passwordErrors'),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


    $email.addEventListener('blur', () => {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'Debes ingresar tu email';
                isInvalid($email)
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Debes ingresar un email válido';
                isInvalid($email)
                break
            default:
                isValid($email)
                $emailErrors.innerHTML = ''
                break;
        }
    });

    $password.addEventListener('blur', () => {
        switch (true) {
            case !$password.value.trim():
                $passwordErrors.innerHTML = 'Debes ingresar tu contraseña';
                isInvalid($password)
                break;
            default:
                isValid($password)
                $passwordErrors.innerHTML = ''
                break;
        }
    });

})