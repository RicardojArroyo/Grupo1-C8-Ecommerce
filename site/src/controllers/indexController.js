let db = require('../database/models');
const { Op } = require('sequelize');
const { products } = require("./adminController");

module.exports = {
    index: (req, res) => {
        db.Product.findAll({ //Encontra todos los productos
            where: { // donde
                discount: { // el valor de la columna (database) "discount"
                    [Op.gte]: 0 // sea mayor o igual a 5
                }
            },
            include: [{association: "images"}]
        })
        .then(products => {
          res.render("index", {
              sliderTitle: "Ofertas especiales",
              sliderProducts: products,
              session: req.session,
            })
        })
        .catch(error => console.log(error))
    },
    
  
    comprar: (req, res) => {
        res.render('comprar.ejs', {
            session: req.session
        })
    },

    envios: (req, res) => {
       res.render('envios.ejs', {
           session: req.session
       })
    },

    contacto: (req, res) => {
        res.render('contacto.ejs', {
            session: req.session
        })
     },

};