let express = require('express');
let router = express.Router();
let { detail, cart, category } = require('../controllers/productController.js');
let userSessionCheck = require('../middlewares/userSessionCheck');

/* GET - Detalle del producto elegido */
router.get('/detail/:id', detail);

/* GET - carrito */
router.get('/cart', userSessionCheck, cart);

/* GET - Lista productos de categorias */
router.get('/category/:id', category);


/* GET - List products for search */
//router.get('/search', search)

module.exports = router