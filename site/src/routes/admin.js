let express = require('express');
let router = express.Router();
let multer = require('multer');
let {viewCreate, create, viewEdit, edit, products, index, deleteProduct} = require('../controllers/adminController.js');
let { categories, categoryCreate, categoryStore, categoryEdit, categoryUpdate, categoryDestroy } = require('../controllers/adminController');
let { users, userEdit, userUpdate, userDestroy } = require('../controllers/adminController');
let avatar = require('../middlewares/uploadUserAvatarFiles')
let uploadProductFile = require('../middlewares/uploadProductsFiles');
let productCreateValidator = require('../validations/productCreateValidator');
let productEditValidator = require('../validations/productEditValidator');
let userAdminCheck = require('../middlewares/userAdminCheck');
let userLog = require('../middlewares/userLog')
let userEditValidator = require('../validations/registerValidator')
let categoryValidator = require('../validations/categoryValidator')

/* GET */
router.get('/', userAdminCheck, index); /* Índice */
router.get('/create', userAdminCheck, viewCreate); /* Vista de creación de producto */
router.get('/edit/:id', userAdminCheck, viewEdit); /* Vista de edición de producto */
router.get('/products', userAdminCheck, products); /* Listado de productos */

/* POST */
router.post('/create', uploadProductFile.array('imgProduct'), productCreateValidator, create); /* Creación de producto */

/* PUT */
router.put('/edit/:id', uploadProductFile.array('imgProduct'), productEditValidator, edit); /* Recibe datos para la edición de productos */

/* DELETE */
router.delete('/delete/:id', deleteProduct); /* Borra un producto */



/* CRUD CATEGORY */


/* All categories */
router.get('/categories', userAdminCheck, categories);

/* Create Category */
router.get('/categories/create', userAdminCheck, categoryCreate);
router.post('/categories/create', categoryValidator, categoryStore);

/* Edit Category */
router.get('/categories/edit/:id', userAdminCheck, categoryEdit);
router.put('/categories/edit/:id', categoryValidator, categoryUpdate);

/* Delete Category */
router.delete('/categories/delete/:id', userAdminCheck, categoryDestroy);

/*--Usuarios--*/

/* All users */
router.get('/users', userAdminCheck, users);

/* Edit user */
router.get('/users/edit/:id', userAdminCheck, userEdit);
router.put('/users/edit/:id',   userAdminCheck, userUpdate);

/* Delete user */
router.delete('/users/delete/:id', userAdminCheck, userDestroy);


module.exports = router;