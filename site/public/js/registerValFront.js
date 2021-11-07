let qs = element => {
    return document.querySelector(element)
}

function isInvalid(variable) {
    variable.style.borderColor = 'red'
}

function isValid(variable) {
    variable.style.borderColor = 'green'
}

window.addEventListener('load', function() {
    let $name = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $lastname = qs('#lastname'),
    $lastnameErrors = qs('#lastnameErrors'),
    $form = qs('#form'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $pass1 = qs('#pass1'),
    $pass1Errors = qs('#pass1Errors'),
    $pass2 = qs('#pass2'),
    $pass2Errors = qs('#pass2Errors'),
    $terms = qs('#flexCheckDefault'),
    $termsErrors = qs('#termsErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;

    
    $name.addEventListener('blur', () => {
        switch(true) {
            case !$name.value.trim():
                $nameErrors.innerHTML = 'Debes ingresar tu nombre'
                isInvalid($name)
                break
            case !regExAlpha.test($name.value):
                $nameErrors.innerHTML = 'Debes ingresar un nombre válido'
                isInvalid($name)
                break
            default:
                isValid($name)
                $nameErrors.innerHTML = ''
                break
        }
    });

    $lastname.addEventListener('blur', () => {
        switch(true) {
            case !$lastname.value.trim():
                $lastnameErrors.innerHTML = 'Debes ingresar tu apellido'
                isInvalid($lastname)
                break
            case !regExAlpha.test($lastname.value):
                $lastnameErrors.innerHTML = 'Debes ingresar un apellido válido'
                isInvalid($lastname)
                break
            default:
                isValid($lastname)
                $lastnameErrors.innerHTML = ''
                break
        }
    });

    $email.addEventListener('blur', () => {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'Debes ingresar un email';
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

    $pass1.addEventListener('blur', () => {
        switch (true) {
            case !$pass1.value.trim():
                $pass1Errors.innerHTML = 'Debes ingresar una contraseña';
                isInvalid($pass1)
                break;
            case !regExPass.test($pass1.value):
                $pass1Errors.innerHTML = 'La contraseña debe tener: entre 8 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
                isInvalid($pass1)
                break
            default:
                isValid($pass1)
                $pass1Errors.innerHTML = ''
                break;
        }
    });

    $pass2.addEventListener('blur', () => {
        switch (true) {
            case !$pass2.value.trim():
                $pass2Errors.innerHTML = 'Debes repetir tu contraseña';
                isInvalid($pass2)
                break;
            case !regExPass.test($pass2.value):
                $pass2Errors.innerHTML = 'La contraseña debe tener: entre 8 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
                isInvalid($pass2)
                break
            default:
                isValid($pass2)
                $pass2Errors.innerHTML = ''
                break;
        }
    });

    $terms.addEventListener('click', () => {
        $terms.value = 'on'
        $terms.classList.toggle('is-valid');
        $terms.classList.remove('is-invalid');
        $termsErrors.innerHTML = ""
    });

    $form.addEventListener('submit', event => {
        let error = false;
        event.preventDefault()
        console.log($form.elements)
        let elementosForm = this.elements
        
        for (let index = 0; index < elementosForm.length-1; index++) {
            if(elementosForm[index].value == "" && elementosForm[index].name !== "archivo"){
                elementosForm[index].classList.add('is-invalid');
                submitErrors.innerHTML = "Los campos señalados son obligatorios";
                error = true;
            }
        }
    
        if(!$terms.checked){
            $terms.classList.add('is-invalid');
            $termsErrors.innerHTML = "Debes aceptar las bases y condiciones"
            error = true
        }
    
        if(!error){
            console.log('Todo bien');
            $form.submit()
        }
    
    })

})