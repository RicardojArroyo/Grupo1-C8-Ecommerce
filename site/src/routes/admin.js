let express = require('express');
let router = express.Router();
let {adminCreate,
    adminEdit} = require('../controllers/adminController.js')


/* Create Product*/
router.get('/adminCreate', adminCreate)
/* Edit Product*/
router.get('/adminEdit', adminEdit)


module.exports = router;