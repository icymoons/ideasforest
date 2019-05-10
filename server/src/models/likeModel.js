module.exports = (sequelize, DataTypes) => {
  const likeModel = sequelize.define('likes', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    }
  })

  likeModel.associate = (models) => {
    likeModel.belongsTo(models.userModel)
  }

  return likeModel
}
