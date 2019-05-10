module.exports = (sequelize, DataTypes) => {
  const userProfileModel = sequelize.define('profiles', {
    photo: DataTypes.STRING,
    description: DataTypes.TEXT
  })

  userProfileModel.associate = (models) => {
    userProfileModel.belongsTo(models.userModel)
  }

  return userProfileModel
}
