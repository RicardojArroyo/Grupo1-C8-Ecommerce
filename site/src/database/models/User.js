module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING(70),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        rol: {
            type: dataTypes.INTEGER(2),
            allowNull: false
        },
        tel: {
            type: dataTypes.STRING(30),
            allowNull: true
        },
        dni: {
            type: dataTypes.INTEGER(11),
            allowNull: true,
            unique: true
        },
        street: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        location: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        province: {
            type: dataTypes.STRING(100),
            allowNull: true
        }
    }
    let config = {
        tableName: 'users',
        timestamps: true
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = models => {
        User.hasMany(models.Cart, {
            as: "cartUsers",
            foreignKey: "userId"
        })
    }

    return User
}