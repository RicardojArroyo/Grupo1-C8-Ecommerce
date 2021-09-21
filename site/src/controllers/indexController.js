module.exports = {
    index: (req, res) => {
<<<<<<< HEAD
        res.render('index')
=======
        res.render('index', {
            session: req.session
        })
>>>>>>> main
    }
}