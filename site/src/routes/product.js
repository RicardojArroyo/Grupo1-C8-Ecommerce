let express = require('express');
let router = express.Router();
let { detail, carrito} = require('../controllers/productController.js')

/* GET - Detalle del producto elegido */
router.get('/detail/:id', detail);

/* GET - carrito */
router.get('/carrito', carrito)

/* GET - lista producto categora */
//router.get('/category/:id', category)

/* GET - List products for search */
//router.get('/search', search)

module.exports = router