module.exports = (sequelize, DataTypes) =>
    sequelize.define('Comment', {
        ideaID: DataTypes.INTEGER,
        authorID: DataTypes.INTEGER,
        content: DataTypes.TEXT
    })