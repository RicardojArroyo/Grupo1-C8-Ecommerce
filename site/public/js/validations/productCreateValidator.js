let qs = element => {
    return document.querySelector(element)
}

function isInvalid(variable) {
    variable.style.borderColor = 'red'
}

function isValid(variable) {
    variable.style.borderColor = 'green'
}

window.addEventListener('load', function () {
    let $productName = qs('#productName'),
        $productNameErrors = qs('#productNameErrors'),
        $price = qs('#price'),
        $priceErrors = qs('#priceErrors'),
        $form = qs('#form'),
        $discount = qs('#discount'),
        $discountErrors = qs('#discountErrors'),
        $description = qs('#description'),
        $descriptionErrors = qs('#descriptionErrors'),
        $categorySelect = qs('#category')
        $categorySelectErrors = qs('#categoryErrors')
        $origin = qs('#origin'),
        $originErrors = qs('#originErrors'),
        $measures = qs('#measures'),
        $measuresErrors = qs('#measuresErrors'),
        regExNum = /^[+]?((\d+(\.\d*)?)|(\.\d+))$/,
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;

    $productName.addEventListener('blur', () => {
        switch (true) {
            case !$productName.value.trim():
                $productNameErrors.innerHTML = 'Debe completar este campo'
                isInvalid($productName)
                break
            case $productName.value.trim().length < 4:
                $productNameErrors.innerHTML = 'Debes ingresar un nombre mayor a 3 carácteres'
                isInvalid($productName)
                break
            default:
                isValid($productName)
                $productNameErrors.innerHTML = ''
                break
        }
    })

    $price.addEventListener('blur', () => {
        switch (true) {
            case !$price.value.trim():
                $priceErrors.innerHTML = 'Debe completar este campo'
                isInvalid($price)
                break
            case !regExNum.test($price.value):
                $priceErrors.innerHTML = 'Debes ingresar un formato válido'
                isInvalid($price)
                break
            default:
                isValid($price)
                $priceErrors.innerHTML = ''
                break
        }
    })

    $discount.addEventListener('blur', () => {
        switch (true) {
            case !$discount.value.trim():
                $discountErrors.innerHTML = 'Debe completar este campo'
                isInvalid($discount)
                break
            case !regExNum.test($discount.value):
                $discountErrors.innerHTML = 'Debes ingresar un formato válido'
                isInvalid($discount)
                break
            default:
                isValid($discount)
                $discountErrors.innerHTML = ''
                break
        }
    })

    $description.addEventListener('blur', () => {
        switch (true) {
            case !$description.value.trim():
                $descriptionErrors.innerHTML = 'Debe completar este campo'
                isInvalid($description)
                break
            case $description.value.trim().length < 20:
                $descriptionErrors.innerHTML = 'Debes ingresar al menos 20 carácteres'
                isInvalid($description)
                break
            default:
                isValid($description)
                $descriptionErrors.innerHTML = ''
                break
        }
    })

    $categorySelect.addEventListener('blur', () => {
        if(!$categorySelect.value.trim()){
            categorySelectErrors.innerHTML = 'Debes elegir una categoría';
            isInvalid($categorySelect)
        } else {
            isValid($categorySelect)
            categorySelectErrors.innerHTML = ''
        }
    })
    $categorySelect.addEventListener('change', () => {
        if(!$categorySelect.value.trim()){
            categorySelectErrors.innerHTML = 'Debes elegir una categoría';
            isInvalid($categorySelect)
        } else {
            isValid($categorySelect)
            categorySelectErrors.innerHTML = ''
        }
    })
    

    $measures.addEventListener('blur', () => {
        if (!$measures.value == '') {
            medidas = $measures.value.split('x')
            if (medidas.length > 0 && medidas.length < 4) {
                if (!isNaN(medidas[0])) {
                    if (!isNaN(medidas[1])) {
                        if (medidas[2]) {
                            if (!isNaN(medidas[2])) {
                                isValid($measures)
                                $measuresErrors.innerHTML = ''
                            } else {
                                $measuresErrors.innerHTML = 'La última medida es errónea'
                                isInvalid($measures)
                            }
                        } else {
                            isValid($measures)
                            $measuresErrors.innerHTML = ''
                        }
                    } else {
                        $measuresErrors.innerHTML = 'La segunda medida es errónea'
                        isInvalid($measures)
                    }
                } else {
                    $measuresErrors.innerHTML = 'La primera medida es errónea'
                    isInvalid($measures)
                }
            } else if (medidas.length > 3) {
                $measuresErrors.innerHTML = 'Introduzca una medida del estilo nn x nn x nn'
                isInvalid($measures)
            }
        }


    })

    $origin.addEventListener('blur', () => {
        switch (true) {
            case !$origin.value.trim():
                $originErrors.innerHTML = 'Debe completar este campo'
                isInvalid($origin)
                break
            case !regExAlpha.test($origin.vale):
                $originErrors.innerHTML = 'Debes ingresar un formato válido'
                isInvalid($origin)
                break
            default:
                isValid($origin)
                originErrors.innerHTML = ''
                break
        }
    })
})