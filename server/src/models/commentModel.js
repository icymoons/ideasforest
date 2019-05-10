module.exports = (sequelize, DataTypes) => {
  const commentModel = sequelize.define('comments', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    content: DataTypes.TEXT
  })
  commentModel.associate = (models) => {
    commentModel.belongsTo(models.userModel)
  }
  return commentModel
}
