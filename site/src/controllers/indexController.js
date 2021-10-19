let db = require('../database/models');

module.exports = {
    index: (req, res) => {
        res.render('index', {
            session: req.session
        })
    }
}