let express = require('express');
let router = express.Router();
let { register, login, profile, password, processRegister, processLogin, editProfile, updateProfile, logout, deleteProfile, addToCart, deleteProductCart } = require('../controllers/usersController.js');
let loginValidator = require('../validations/loginValidator');
let registerValidator = require('../validations/registerValidator');
let uploadUsersAvatar = require('../middlewares/uploadUserAvatarFiles');
let userSessionCheck = require('../middlewares/userSessionCheck');
let userLog = require('../middlewares/userLog');

/* GET */
router.get('/register', userLog, register); /* Vista del formulario de registro */
router.get('/login', userLog, login); /* Vista del formulario de login */
router.get('/profile', userSessionCheck, profile); /* Vista del perfil de usuario */
router.get('/password', password); /* Vista del formulario de recuperación de contraseña */
router.get('/profile/edit/:id', editProfile); 
router.get('/logout', logout)

/* POST */
router.post('/register', registerValidator, processRegister);
router.post('/login', loginValidator, processLogin);

/* PUT */
router.put('/profile/edit/:id', uploadUsersAvatar.single('avatar'), updateProfile)
router.delete('/profile/delete/:id', deleteProfile)

/* Ruta para añadir producto al carrito */
router.get('/addToCart/:id', userSessionCheck, addToCart);

/* Ruta para eliminar producto de carrito */
router.delete('/deleteProductCart/:id', userSessionCheck, deleteProductCart);

module.exports = router;