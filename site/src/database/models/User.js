module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {

    }
    let config = {

    }

    const User = sequelize.define(alias, cols, config)

    return User
}