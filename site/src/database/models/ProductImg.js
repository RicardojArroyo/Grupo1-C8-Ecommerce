module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductImg';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        productsId: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: 'products_images',
        timestamps: false
    }

    const ProductImg = sequelize.define(alias, cols, config)

    ProductImg.associate = models => {
        ProductImage.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'productsId'
        })
    }

    return ProductImg
}