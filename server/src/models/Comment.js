module.exports = (sequelize, DataTypes) =>
    sequelize.define('Comment', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })