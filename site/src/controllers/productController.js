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
      db.Product.findByPk(req.params.id, {
        include: {association : 'images'}
      })
      .then(producto => {
        res.render('product/productDetail',{
          producto,
          session: req.session
        })
        //res.send(producto)
      })
    },
    search: (req, res) => {
      db.Products.findAll({
          where: {
              name: {
                  [Op.like]: `%${req.query.search}`
              }
          },
          include: [{association: "productImages"}]
      }).then(result => res.render('searchResult', {
          result,
          session: req.session,
          search: req.query.search
      }))
  },
}
