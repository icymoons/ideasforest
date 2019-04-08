module.exports = (sequelize, DataTypes) =>
    sequelize.define('Idea', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })