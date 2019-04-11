module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        pseudo: {
            type: DataTypes.STRING,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })