module.exports = (sequelize, DataTypes) => {
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
  userModel.associate = (models) => {
    userModel.hasOne(models.profileModel)
    userModel.hasMany(models.ideaModel)
    userModel.hasMany(models.commentModel)
    userModel.hasMany(models.replyModel)
    userModel.hasMany(models.likeModel)
  }
  return userModel
}
