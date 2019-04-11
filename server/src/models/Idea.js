module.exports = (sequelize, DataTypes) =>
    sequelize.define('Idea', {
        title: {
            type: DataTypes.TEXT,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            unique: true
        },
        categories: DataTypes.TEXT
    })