let express = require('express');
let router = express.Router();
let controller = require('../controllers/indexController.js');
let cookieCheck = require('../middlewares/cookieCheck');

router.get('/', cookieCheck, controller.index);
router.get('/comprar', cookieCheck, controller.comprar);
router.get('/envios', cookieCheck, controller.envios);
router.get('/contacto', cookieCheck, controller.contacto);
router.get('/productos', cookieCheck, controller.productos);
router.get('/cocina', cookieCheck, controller.cocina);
router.get('/comedor', cookieCheck, controller.comedor);
router.get('/dormitorio', cookieCheck, controller.dormitorio);
router.get('/living', cookieCheck, controller.living);
router.get('/oficina', cookieCheck, controller.oficina);
router.get('/search', controller.search); 

module.exports = router;