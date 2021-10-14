let express = require('express');
let router = express.Router();
<<<<<<< HEAD
let controller = require('../controllers/indexController')
=======
let controller = require('../controllers/indexController.js');
let cookieCheck = require('../middlewares/cookieCheck');

router.get('/', cookieCheck, controller.index)

module.exports = router;