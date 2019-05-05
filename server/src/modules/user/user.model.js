const DataTypes = require('sequelize')
const sequelize = require('../../db')
const userModel = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
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
module.exports = userModel
