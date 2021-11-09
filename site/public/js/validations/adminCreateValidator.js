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
    let $productName = qs('#productName'),
    $productNameErrors = qs('#productNameErrors'),
    $price = qs('#price'),
    $priceErrors = qs('#priceErrors'),
    $form = qs('#form'),
    $discount = qs('#discount'),
    $discountErrors = qs('#discountErrors'),
    $description = qs('#description'),
    $descriptionErrors = qs('#descriptionErrors'),
    $origin = qs('#origin'),
    $originErrors = qs('#originErrors'),
    $measures = qs('#measures'),
    $measuresErrors = qs('#measuresErrors');


    $productName.addEventListener('blur', () => {
        switch(true) {
            case !$productName.value.trim():
                $productNameErrors.innerHTML = 'Debe introducir un nombre'
                isInvalid($productName)
                break
            default:
                isValid($productName)
                $productNameErrors.innerHTML = ''
                break
        }
    })
    
    $measures.addEventListener('keyup', () => {
        medidas = $measures.value.split('x')
        if(medidas.length > 0 && medidas.length < 4) {
            if(!isNaN(medidas[0])) {
                if(!isNaN(medidas[1])) {
                    if(medidas[2]) {
                        if(!isNaN(medidas[2])) {
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
        
    })
})