module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductImg';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        productId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: 'products_images',
        timestamps: false
    }

    const ProductImg = sequelize.define(alias, cols, config)

    ProductImg.associate = models => {
        ProductImg.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'productId'
        })
    }

    return ProductImg
}