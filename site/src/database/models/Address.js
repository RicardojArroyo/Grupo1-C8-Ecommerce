module.exports = (sequelize, dataTypes) => {
    let alias = 'Address';
    let cols = {

    }
    let config = {

    }

    const Address = sequelize.define(alias, cols, config)

    return Address
}