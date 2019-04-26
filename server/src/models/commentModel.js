module.exports = (sequelize, DataTypes) =>
    sequelize.define('comments', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        content: DataTypes.TEXT
    })