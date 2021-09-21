let express = require('express');
let router = express.Router();
<<<<<<< HEAD
let controller = require('../controllers/indexController')
=======
let controller = require('../controllers/indexController.js');
>>>>>>> main

router.get('/', controller.index)


module.exports = router;