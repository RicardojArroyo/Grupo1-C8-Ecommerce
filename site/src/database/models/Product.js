module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        productName: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(800),
            allowNull: false
        },
        categoryId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        measures: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        price: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        origin: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
           
        }
    }
    let config = {
        tableName: 'products',
        timestamps: true
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'categoryId'
        })
        Product.hasMany(models.ProductImg, {
            as: 'images',
            foreignKey: 'productId'
        })
        Product.hasMany(models.Cart, {
            as: "cartProducts",
            foreignKey: "productId"
        })
    }

    return Product
}