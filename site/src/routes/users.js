let express = require('express');
let router = express.Router();
<<<<<<< HEAD
let { register, login, editProfile, password } = require('../controllers/usersController');

/* GET - Register form */
router.get('users/register', register);

/* GET - Login form */
router.get('users/login', login);

/* GET - User profile */
router.get('users/editProfile', editProfile);
   
/* GET - User password */
router.get('users/password', password);

module.exports = router
=======
let { register, login, profile, password, processRegister, processLogin, editProfile, updateProfile, logout } = require('../controllers/usersController.js');
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

module.exports = router;
>>>>>>> main
