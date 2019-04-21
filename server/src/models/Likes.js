module.exports = (sequelize, DataTypes) =>
    sequelize.define('likes', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        }
    })