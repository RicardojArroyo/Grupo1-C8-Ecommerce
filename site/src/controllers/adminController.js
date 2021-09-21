<<<<<<< HEAD
module.exports = {
    adminCreate: (req, res) => {
        res.render("admin/adminCreate")
    },
     adminEdit: (req, res) => {
        res.render("admin/adminEdit")
=======
let { getProducts, writeProductsJson } = require('../data/dataBase');
let { validationResult } = require('express-validator');

module.exports = {
    index: (req, res) => {
        res.render('admin/adminIndex', {
            session: req.session
        })
    },
    products: (req, res) => {
        res.render('admin/adminProducts', {
            productos: getProducts,
            session: req.session
        })
    },
    viewCreate: (req, res) => {
        res.render('admin/adminCreate', {
            session: req.session
        })
    },
    create: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let lastId = 1;

            getProducts.forEach(producto => {
                if (producto.id > lastId) {
                    lastId = producto.id
                }
            });

            let arrayImages = [];
            if (req.files) {
                req.files.forEach(image => {
                    arrayImages.push(image.filename);
                })
            }

            let nuevoProducto = {
                id: lastId + 1,
                productName: req.body.productName,
                description: req.body.description,
                category: req.body.category,
                measures: req.body.measures,
                price: req.body.price,
                origin: req.body.origin,
                availability: req.body.availability,
                image: arrayImages.length > 0 ? arrayImages : 'default-image.jpg'
            }

            getProducts.push(nuevoProducto);

            writeProductsJson(getProducts);

            res.redirect('/admin/products');
        } else {
            res.render('admin/adminCreate', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    viewEdit: (req, res) => {
        let producto = getProducts.find(producto => {
            return producto.id === +req.params.id;
        })

        res.render('admin/adminEdit', {
            producto,
            session: req.session
        });
    },
    edit: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let arrayImages = [];
            if (req.files) {
                req.files.forEach(image => {
                    arrayImages.push(image.filename);
                })
            }

            getProducts.forEach(producto => {
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

            res.redirect('/admin/products');
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
        getProducts.forEach(producto => {
            if (producto.id === +req.params.id) {
                let productoAEliminar = getProducts.indexOf(producto);
                getProducts.splice(productoAEliminar, 1);
            }
        })

        writeProductsJson(getProducts);

        res.redirect('/admin/products');
>>>>>>> main
    }
}