let express = require('express');
let router = express.Router();
<<<<<<< HEAD
let { productDetail, carrito } = require('../controllers/productController')

/* GET - Product Detail */
router.get('product/productDetail', productDetail)
/* GET - carrito */
router.get('product/carrito', carrito)
=======
let { detail, carrito} = require('../controllers/productController.js')

/* GET - Detalle del producto elegido */
router.get('/detail/:id', detail);

/* GET - carrito */
router.get('/carrito', carrito)
>>>>>>> main

module.exports = router