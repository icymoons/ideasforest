module.exports = (sequelize, DataTypes) => {
  const ideaModel = sequelize.define('ideas', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    tags: DataTypes.TEXT
  })

  ideaModel.associate = (models) => {
    ideaModel.belongsTo(models.userModel)
  }

  return ideaModel
}
