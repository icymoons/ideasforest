module.exports = (sequelize, DataTypes) => {
  const replyModel = sequelize.define('replies', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    content: DataTypes.TEXT
  })

  replyModel.associate = (models) => {
    replyModel.belongsTo(models.userModel)
  }

  return replyModel
}
