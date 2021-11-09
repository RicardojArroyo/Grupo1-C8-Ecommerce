const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = [
    check('email').notEmpty().withMessage('Debes ingresar tu email').bail().isEmail().withMessage('Debes ingresar un email válido'),
    check('password').notEmpty().withMessage('Debes ingresar tu contraseña'),

    body('password').custom((value, {req}) => {
        return db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user =>{
            if(!bcrypt.compareSync(req.body.password, user.dataValues.password)) {
                return Promise.reject()
            }
        })
        .catch(error => {
            return Promise.reject('Credenciales inválidas')
        })
    })
]