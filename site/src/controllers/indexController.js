let db = require('../database/models');
const { Op } = require('sequelize');
const { products } = require("./adminController");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
    index: (req, res) => {
        db.Product.findAll({ //Encontra todos los productos
            where: { // donde
                discount: { // el valor de la columna (database) "discount"
                    [Op.gte]: 5 // sea mayor o igual a 5
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

    productos: (req, res) => {
        db.Product.findAll({ //Encontra todos los productos
            where: { // donde
                discount: { // el valor de la columna (database) "discount"
                    [Op.gte]: 0 // sea mayor o igual a 5
                }
            },
            include: [{association: "images"}]
        })
        .then(products => {
          res.render("productos.ejs", {
              sliderTitle: "Productos",
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
    cocina: (req, res) => {
        db.Product.findAll({
            where: {
                categoryId : 1
            },
            include: [
                {
                    association: "images"
                },
            ],
        })
        .then( products => {
            res.render('cocina.ejs', {
                sliderTitle: "Cocina",
              sliderProducts: products,
              session: req.session,
            })
        })
    },
    
    comedor: (req, res) => {
        db.Product.findAll({
            where: {
                categoryId : 2
            },
            include: [
                {
                    association: "images"
                },
            ],
        })
        .then( products => {
            res.render('comedor.ejs', {
                sliderTitle: "Comedor",
              sliderProducts: products,
              session: req.session,
            })
        })
    },

    dormitorio: (req, res) => {
        db.Product.findAll({
            where: {
                categoryId : 3
            },
            include: [
                {
                    association: "images"
                },
            ],
        })
        .then( products => {
            res.render('dormitorio.ejs', {
                sliderTitle: "Dormitorio",
              sliderProducts: products,
              session: req.session,
            })
        })
    },

    living: (req, res) => {
        db.Product.findAll({
            where: {
                categoryId : 4
            },
            include: [
                {
                    association: "images"
                },
            ],
        })
        .then( products => {
            res.render('living.ejs', {
                sliderTitle: "Living",
              sliderProducts: products,
              session: req.session,
            })
        })
    },

    oficina: (req, res) => {
        db.Product.findAll({
            where: {
                categoryId : 5
            },
            include: [
                {
                    association: "images"
                },
            ],
        })
        .then( products => {
            res.render('oficina.ejs', {
                sliderTitle: "Oficina",
              sliderProducts: products,
              session: req.session,
            })
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

     search: (req, res) => {
        db.Product.findAll({
          where: {
            [Op.or]: [
              {
                productName: {
                  [Op.like]: `%${req.query.keywords}%`,
                },
              },
              
            ]
          },
          include: [            
            {
              association: "images",
            },
          ],
        }).then((result) => {
          res.render("results.ejs", {
            result,
            toThousand,
            search: req.query.keywords,
            session: req.session
          });
        });
      
	}

};