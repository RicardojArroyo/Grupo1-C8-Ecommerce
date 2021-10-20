let { validationResult } = require('express-validator');
let db = require('../database/models');

module.exports = {
    index: (req, res) => {
        res.render('admin/adminIndex', {
            session: req.session
        })
    },
    products: (req, res) => {
        db.Product.findAll().then(products => {
            res.render('admin/adminProducts', {
                products,
                session: req.session
            })
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

            let { productName, description, category, measures, price, origin, discount } = req.body

            db.Product.create({
                productName,
                description,
                categoryId: category,
                measures,
                price,
                origin,
                discount
            })
            .then(product => {
                if(arrayImages.length > 0) {
                    let images = arrayImages.map(image => {
                        return {
                            image: image,
                            productId: product.id
                        }
                    })
                    db.ProductImg.bulkCreate(images)
                    .then(() => res.redirect('/admin/products'))
                    .catch(err => console.log(err));
                }
            })

        } else {
            res.render('admin/adminCreate', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    viewEdit: (req, res) => {
        let categoriesPromise = db.Category.findAll()
        let productPromise = db.Product.findByPk(req.params.id)

        Promise.all([categoriesPromise, productPromise])
        .then(([categories, products]) => {
            res.render('admin/adminEdit', {
                categories,
                products,
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
                origin: req.body.origin,
                discount: req.body.discount,
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(product => {
                if(arrayImages.length > 0) {
                    let images = arrayImages.map(image => {
                        return {
                            image: image,
                            productId: product.id
                        }
                    })
                    db.ProductImg.bulkCreate(images)
                    .then(() => res.redirect('/admin/products'))
                    .catch(err => console.log(err));
                }
            }).catch(err => console.log(err))
            
            /* getProducts.forEach(producto => {
                if (producto.id === +req.params.id) {
                    producto.id = producto.id,
                        producto.productName = req.body.productName,
                        producto.description = req.body.description,
                        producto.category = req.body.category,
                        producto.measures = req.body.measures,
                        producto.price = req.body.price,
                        producto.origin = req.body.origin,
                        producto.availability = req.body.availability,
                        producto.image = arrayImages.length > 0 ? arrayImages : producto.image
                }
            })

            writeProductsJson(getProducts);

            res.redirect('/admin/products'); */
        } else {
            let producto = getProducts.find(producto => {
                return producto.id === +req.params.id;
            })
            res.render('admin/adminEdit', {
                producto,
                errors: errors.mapped(),
                old: req.body,
                session: req.session
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
                include: [{association: 'images'}]
            })
            .then(() => {
                res.redirect('/admin/products')
            })
        })
        .catch(err => console.log(err));
    }
}