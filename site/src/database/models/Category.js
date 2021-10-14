module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {

    }
    let config = {

    }

    const Category = sequelize.define(alias, cols, config)

    return Category
}