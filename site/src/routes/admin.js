let express = require('express');
let router = express.Router();
<<<<<<< HEAD
let {adminCreate,
    adminEdit} = require('../controllers/adminController')


/* Create Product*/
router.get('/adminCreate', adminCreate)
/* Edit Product*/
router.get('/adminEdit/', adminEdit)

=======
let multer = require('multer');
let {viewCreate, create, viewEdit, edit, products, index, deleteProduct} = require('../controllers/adminController.js');
let uploadProductFile = require('../middlewares/uploadProductsFiles');
let productValidator = require('../validations/productValidator');
let userAdminCheck = require('../middlewares/userAdminCheck');

/* GET */
router.get('/', userAdminCheck, index); /* Índice */
router.get('/create', userAdminCheck, viewCreate); /* Vista de creación de producto */
router.get('/edit/:id', userAdminCheck, viewEdit); /* Vista de edición de producto */
router.get('/products', userAdminCheck, products); /* Listado de productos */

/* POST */
router.post('/create', uploadProductFile.array('imgProduct'), productValidator, create); /* Creación de producto */

/* PUT */
router.put('/edit/:id', uploadProductFile.array('imgProduct'), productValidator, edit); /* Recibe datos para la edición de productos */

/* DELETE */
router.delete('/delete/:id', deleteProduct); /* Borra un producto */
>>>>>>> main

module.exports = router;