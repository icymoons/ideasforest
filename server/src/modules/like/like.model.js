const DataTypes = require('sequelize')
const sequelize = require('../../db')
const likeModel = sequelize.define('likes', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  }
})
module.exports = likeModel
