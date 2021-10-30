let db = require('../database/models');
const { Op } = require("sequelize");

module.exports = {
  productDetail: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: {association : 'images'}
    })
    .then(product => {
      res.send(product)
    })
  },
    carrito: (req, res) => {
      res.render('product/carrito', {
        session: req.session
      })
  },
    detail: (req, res) => {
      let categoriesPromise = db.Category.findAll()
      let productPromise = db.Product.findByPk(+req.params.id, {
        include: {association: 'images'}
      })

      Promise.all([categoriesPromise, productPromise])
      .then(([categories, products]) => {
          res.render('product/productDetail', {
                categories,
                products,
                session: req.session
          });
      }) 
    }
      /* let producto = getProducts.find(producto => {
        return producto.id === +req.params.id
      })
      res.render('product/productDetail', { producto: producto, session: req.session })
    } */
}
