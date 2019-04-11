module.exports = (sequelize, DataTypes) =>
    sequelize.define('Like', {
        userID: {
            type: DataTypes.STRING,
        },
        ideaID: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })