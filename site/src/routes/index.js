let express = require('express');
let router = express.Router();
let controller = require('../controllers/indexController.js');
let cookieCheck = require('../middlewares/cookieCheck');

router.get('/', cookieCheck, controller.index);
router.get('/comprar', cookieCheck, controller.comprar);

module.exports = router;