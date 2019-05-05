const DataTypes = require('sequelize')
const sequelize = require('../../db')

const replyModel = sequelize.define('replies', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  content: DataTypes.TEXT
})
module.exports = replyModel
