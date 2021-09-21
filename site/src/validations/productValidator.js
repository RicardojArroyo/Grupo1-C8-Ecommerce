const { check } = require('express-validator');

module.exports = [
    check('productName').notEmpty().withMessage('Este campo no puede estar vacío'),
    check('price').notEmpty().withMessage('Este campo no puede estar vacío').isNumeric().withMessage('Solo puedes ingresar números'),
    check('description').notEmpty().withMessage('Este campo no puede estar vacío'),
    check('origin').notEmpty().withMessage('Este campo no puede estar vacío')
]