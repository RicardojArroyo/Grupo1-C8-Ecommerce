module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
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
            type: dataTypes.INTEGER,
            allowNull: false
        },
        measures: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        origin: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: 'products',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'categoryId'
        })
        Product.hasMany(models.ProductImg, {
            as: 'images',
            foreignKey: 'productsId'
        })
    }

    return Product
}