let { validationResult } = require('express-validator');
const fs = require("fs");
let db = require('../database/models');

module.exports = {
    index: (req, res) => {
        res.render('admin/adminIndex', {
            session: req.session
        })
    },
    products: (req, res) => {
        db.Product.findAll({
            include: [{ association: 'category' }]
        })
            .then(products => {
                res.render('admin/adminProducts', {
                    products,
                    session: req.session
                });
            })
    },
    viewCreate: (req, res) => {
        db.Category.findAll().then(categories => {
            res.render('admin/adminCreate', {
                categories,
                session: req.session
            })
        })
    },
    create: (req, res) => {
        let errors = validationResult(req);
        if (req.fileValidatorError) {
            let image = {
                param: 'image',
                msg: req.fileValidatorError
            };
            errors.push(image)
        }

        if (errors.isEmpty()) {
            let arrayImages = [];
            if (req.files) {
                req.files.forEach(image => {
                    arrayImages.push(image.filename);
                })
            }

            let { productName, description, category, measures, price, discount, origin } = req.body

            db.Product.create({
                productName,
                description,
                categoryId: category,
                measures,
                price,
                discount,
                origin,

            })
                .then(product => {
                    if (arrayImages.length > 0) {
                        let images = arrayImages.map(image => {
                            return {
                                image: image,
                                productId: product.id,
                            };
                        });
                        db.ProductImg.bulkCreate(images)
                            .then(() => res.redirect('/admin/products'))
                            .catch(err => console.log(err));
                    } else {
                        db.ProductImages.create({
                            image: "default-image.png",
                            productId: product.id,
                        })
                            .then(() => res.redirect("/admin/products"))
                            .catch((err) => console.log(err));
                    }
                });

        } else {
            db.Category.findAll().then(categories => {
                res.render('admin/adminCreate', {
                    categories,
                    old: req.body,
                    session: req.session,
                    errors: errors.mapped()
                })
            })
        }
    },
    viewEdit: (req, res) => {
        let categoriesPromise = db.Category.findAll()
        let productPromise = db.Product.findByPk(req.params.id)

        Promise.all([categoriesPromise, productPromise])
            .then(([categories, product]) => {
                res.render('admin/adminEdit', {
                    categories,
                    product,
                    session: req.session
                });
            })
    },
    edit: (req, res) => {
        let errors = validationResult(req);
        if (req.fileValidatorError) {
            let image = {
                param: 'image',
                msg: req.fileValidatorError
            };
            errors.push(image)
        }

        if (errors.isEmpty()) {
            let arrayImages = [];
            if (req.files) {
                req.files.forEach(image => {
                    arrayImages.push(image.filename);
                })
            }

            db.Product.update({
                productName: req.body.productName,
                description: req.body.description,
                categoryId: req.body.category,
                measures: req.body.measures,
                price: req.body.price,
                discount: req.body.discount,
                origin: req.body.origin,

            }, {
                where: {
                    id: req.params.id
                }
            })
                .then(result => {
                    if (result) {
                        if (arrayImages.length > 0) {
                            let images = arrayImages.map(image => {
                                return {
                                    image: image,
                                    productId: req.params.id
                                }
                            })
                            db.ProductImg.findAll({
                                where: { productId: req.params.id }
                            })
                                .then(() => {
                                    db.ProductImg.bulkCreate(images)
                                        .then(res.redirect('admin/products'))
                                })
                                .catch(err => res.send(err))
                        }
                        res.redirect("/admin/products");
                    }
                })
        } else {
            let categoriesPromise = db.Category.findAll()
            let productPromise = db.Product.findByPk(req.params.id)

            Promise.all([categoriesPromise, productPromise])
                .then(([categories, product]) => {
                    res.render('admin/adminEdit', {
                        categories,
                        product,
                        session: req.session,
                        old: req.body,
                        errors: errors.mapped()
                    });
                })
        }
    },
    deleteProduct: (req, res) => {
        db.ProductImg.destroy({
            where: {
                productId: req.params.id
            }
        })
            .then(() => {
                db.Product.destroy({
                    where: {
                        id: req.params.id
                    },
                    include: [{ association: 'images' }]
                })
                    .then(() => {
                        res.redirect('/admin/products')
                    })
            })
            .catch(err => console.log(err));
    }
}