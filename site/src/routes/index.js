let express = require('express');
let router = express.Router();
let controller = require('../controllers/indexController.js');
let cookieCheck = require('../middlewares/cookieCheck');

router.get('/', cookieCheck, controller.index);
router.get('/comprar', cookieCheck, controller.comprar);
router.get('/envios', cookieCheck, controller.envios);
router.get('/contacto', cookieCheck, controller.contacto);
router.get('/productos', cookieCheck, controller.productos);

module.exports = router;