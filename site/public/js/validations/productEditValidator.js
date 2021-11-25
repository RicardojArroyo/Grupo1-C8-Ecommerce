let qs = element => {
    return document.querySelector(element)
}

function isInvalid(variable) {
    variable.style.borderColor = 'red'
}

function isValid(variable) {
    variable.style.borderColor = 'green'
}