module.exports = (sequelize, DataTypes) =>
    sequelize.define('Comment', {
        ideaID: DataTypes.INTEGER,
        authorID: DataTypes.INTEGER,
        parentID: DataTypes.INTEGER,
        content: DataTypes.TEXT
    })