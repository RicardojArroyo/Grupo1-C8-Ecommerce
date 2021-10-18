let { validationResult } = require('express-validator');
let bcrypt = require('bcryptjs')
let db = require('../database/models')

module.exports = {
    /* Login form */
    login: (req, res) => {
        res.render('users/login', {
            session: req.session
        })
    },
    /* Register form */
    register: (req, res) => {
        res.render('users/register', {
            session: req.session
        })  
    },
    /* User profile */
    profile: (req, res) =>{
        let user = getUsers.find(user => user.id === req.session.user.id);

        res.render('users/userProfile', {
            user,
            session: req.session
        })
    },
    editProfile: (req, res) => {
        let user = getUsers.find(user => user.id === +req.params.id)

        res.render('users/editProfile', {
            user,
            session: req.session
        })
    },
    updateProfile: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let user = getUsers.find(user => user.id === +req.params.id)

            let {
                name,
                lastname,
                tel,
                address,
                dni
            } = req.body

            user.name = name
            user.lastname = lastname
            user.tel = tel
            user.address = address
            user.dni = dni
            user.avatar = req.file ? req.file.filename : user.avatar

            writeUsersJson(getUsers);

            delete user.contraseña;

            req.session.user = user;

            res.redirect('/users/profile');

        } else {
            res.render('users/editProfile', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    /* User password */
    password: (req, res) => {
        res.render('users/password')
    },
    processRegister: (req, res) => {
        let errors = validationResult(req)
        if (req.filevalidatorError) {
            let image = {
                param: 'image',
                msg: req.filevalidatorError,
            };
            errors.push(image);
        }

        if(errors.isEmpty()) {
            let {name, lastname, email, password} = req.body;
            db.User.create({
                name,
                lastname,
                email,
                password: bcrypt.hashSync(password, 12),
                avatar: req.file ? req.file.filename : 'default-image.png',
                rol: 1,
            }).then(() => {
                res.redirect('/user/login')
            }).catch(err => console.log(err))
            

           /* let {
                name,
                lastname,
                email,
                password
            } = req.body

            let newUser = {
                id: lastId + 1,
                name,
                lastname,
                email,
                contraseña: bcrypt.hashSync(password, 12),
                avatar: req.file ? req.file.filename : 'default-image.png',
                rol: 'ROL_USER',
                tel: '',
                address: '',
                dni: '',
                city: '',
                province: ''
            } */

            


        } else {
            res.render('users/register', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let user = getUsers.find(user => user.email === req.body.email);

            req.session.user = {
                id: user.id,
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }

            if(req.body.recordar){
                res.cookie("usersimperio", req.session.user, {expires: new Date(Date.now() + 900000), httpOnly : true})
            }

            res.locals.user = req.session.user;

            res.redirect('/');

        } else {
            res.render('users/login', {
                errors: errors.mapped(),
                session: req.session
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        if(req.cookies.userimperio){
            res.cookie("usersimperio", "", {maxAge: -1})
        }
        res.redirect('/')
    } 
}
