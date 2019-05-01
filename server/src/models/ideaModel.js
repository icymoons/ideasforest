module.exports = (sequelize, DataTypes) =>
  sequelize.define('ideas', {
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
