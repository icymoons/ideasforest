module.exports = (sequelize, DataTypes) =>
    sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
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