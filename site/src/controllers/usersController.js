let { validationResult } = require('express-validator');
let bcrypt = require('bcryptjs');
let db = require('../database/models');

module.exports = {
    login: (req, res) => {
        res.render('users/login', {
            session: req.session
        })
    },
    register: (req, res) => {
        res.render('users/register', {
            session: req.session
        })  
    },
    password: (req, res) => {
        res.render('users/password', {
            session: req.session
        })  
    },
    profile: (req, res) =>{
        db.User.findByPk(req.session.user.id).then(user => {
            res.render('users/userProfile', {
                user,
                session: req.session
            })
        })
    },
    editProfile: (req, res) => {
        db.User.findByPk(req.session.user.id).then(user => {
            res.render('users/editProfile', {
                user,
                session: req.session
            })
        })
    },
    updateProfile: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()) {
            let { name, lastname, tel, street, dni, location, province } = req.body
            db.User.update({
                name,
                lastname,
                tel,
                avatar: req.file ? req.file.filename : req.session.user.avatar,
                street,
                dni,
                location,
                province
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                res.redirect('/users/profile');
            })
            
        } else {
            res.render('users/editProfile', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    deleteProfile: (req, res) => {
        req.session.destroy();
        if (req.cookies.usersimperio){
          res.cookie("usersimperio",'',{maxAge:-1});
        }
        db.User.destroy({
          where:{
            id : req.params.id
          }
        })
        return res.redirect('/') 
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

        if (req.fileValidatorError) {
            let image = {
              param: "image",
              msg: req.fileValidatorError,
            };
            errors.push(image);
        }

        if(errors.isEmpty()) {
            let { name, lastname, email, pass1 } = req.body;

            db.User.create({
                name,
                lastname,
                email,
                password: bcrypt.hashSync(pass1, 12),
                avatar: req.file ? req.file.filename : 'default-image.png',
                rol: 0,
            }).then(() => {
                res.redirect('/users/login');
            }).catch(err => console.log(err))

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
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                    avatar: user.avatar,
                    rol: user.rol
                };

                if(req.body.recordar){
                    res.cookie("usersimperio", req.session.user, {expires: new Date(Date.now() + 900000), httpOnly : true})
                }

                res.locals.user = req.session.user;

                res.redirect('/');
            })

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
    },
    addToCart: (req, res) => {
        /* console.log(req.params.id, req.session.userLogged.id) */
        db.Cart.create({
            userId: req.session.user.id,
            productId: req.params.id,
            quantity: 1
        })
        .then(() => {
            res.redirect('/product/cart')
        })
    },
    deleteProductCart: (req, res) => {
        db.Cart.destroy({
            where: {
                productId: req.params.id
            }
        })
        .then(() => {
            res.redirect('/product/cart')
        })
    } 
} 
