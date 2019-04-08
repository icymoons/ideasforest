module.exports = (sequelize, DataTypes) =>
    sequelize.define('Like', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })