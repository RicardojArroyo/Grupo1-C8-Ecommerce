const { check, body } = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name').notEmpty().withMessage('Debes ingresar tu nombre').isLength({min: 2}).withMessage('Debe tener como mínimo 2 caracteres'),
    check('lastname').notEmpty().withMessage('Debes ingresar tu apellido'),
    check('email').notEmpty().withMessage('Debes ingresar un email').bail().isEmail().withMessage('Debes ingresar un email válido'),
    body('email').custom(value => {
        return db.User.findOne({
            where: {
                email: value
            }
        })
        .then(user => {
            if(user) {
                return Promise.reject('El email ya está registrado')
            }
        })
    }),
    check('pass1').notEmpty().withMessage('Debes ingresar una contraseña').isLength({min: 8}).withMessage('La contraseña debe tener como mínimo 8 caracteres'),
    body('pass2').custom((value, {req}) => value !== req.body.pass1 ? false : true).withMessage('Las contraseñas no coinciden'),
    check('terms').isString('on').withMessage('Debes aceptar los términos y condiciones')
]