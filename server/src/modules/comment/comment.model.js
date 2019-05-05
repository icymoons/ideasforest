const DataTypes = require('sequelize')
const sequelize = require('../../db')
const commentModel = sequelize.define('comments', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  content: DataTypes.TEXT
})
module.exports = commentModel
