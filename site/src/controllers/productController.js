<<<<<<< HEAD
module.exports = {
    productDetail: (req, res) => {
         res.render('productDetail')
    },
    carrito: (req, res) => {
      res.render('carrito')
=======
let { getProducts } = require('../data/dataBase')

module.exports = {
    productDetail: (req, res) => {
      res.render('product/productDetail', {
        session: req.session
      })
    },
    carrito: (req, res) => {
      res.render('product/carrito', {
        session: req.session
      })
    },
    detail: (req, res) => {
      let producto = getProducts.find(producto => {
        return producto.id === +req.params.id
      })
      res.render('product/productDetail', { producto: producto, session: req.session })
>>>>>>> main
    }
}
