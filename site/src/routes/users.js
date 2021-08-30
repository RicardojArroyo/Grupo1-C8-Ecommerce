let express = require('express');
let router = express.Router();
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