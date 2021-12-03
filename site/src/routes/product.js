let express = require('express');
let router = express.Router();
let { detail, cart, category, success } = require('../controllers/productController.js');
let userSessionCheck = require('../middlewares/userSessionCheck');

/* GET - Detalle del producto elegido */
router.get('/detail/:id', detail);

/* GET - carrito */
router.get('/cart', userSessionCheck, cart);
router.delete('/cart/success', userSessionCheck, success);

/* GET - Lista productos de categorias */
router.get('/category/:id', category);


/* GET - List products for search */
//router.get('/search', search)

module.exports = router