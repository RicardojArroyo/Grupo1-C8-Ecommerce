let express = require('express');
let router = express.Router();
let { productDetail, carrito } = require('../controllers/productController')

/* GET - Product Detail */
router.get('product/productDetail', productDetail)
/* GET - carrito */
router.get('product/carrito', carrito)

module.exports = router