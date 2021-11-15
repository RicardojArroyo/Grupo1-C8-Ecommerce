const { check, body } = require('express-validator');
const db = require("../database/models");

module.exports = [
    check('productName').notEmpty().withMessage('Este campo no puede estar vacío').isLength({min: 5}).withMessage('Debe tener como mínimo 5 caracteres'),
    check('price').notEmpty().withMessage('Este campo no puede estar vacío').isNumeric().withMessage('Solo puedes ingresar números'),
    check('discount').notEmpty().withMessage('Este campo no puede estar vacío'),
    check('description').notEmpty().withMessage('Este campo no puede estar vacío').isLength({min: 20}).withMessage('Debe tener como mínimo 20 caracteres'),
    check('category').notEmpty().withMessage('Este campo no puede estar vacío'),
    check('measures').notEmpty().withMessage('Este campo no puede estar vacío'),
    check('origin').notEmpty().withMessage('Este campo no puede estar vacío'),
    

]