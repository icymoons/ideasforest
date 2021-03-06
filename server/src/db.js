const Sequelize = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)
/*
// user - replies
db.users.hasMany(db.replies)
db.replies.belongsTo(db.users)

// user - ideas
db.users.hasMany(db.ideas)
db.ideas.belongsTo(db.users)

// users - likes
db.users.hasMany(db.likes)
db.likes.belongsTo(db.users)

// users - comments
db.users.hasMany(db.comments)
db.comments.belongsTo(db.users)

// ideas - comments
db.ideas.hasMany(db.comments)
db.comments.belongsTo(db.ideas)

// ideas - likes
db.ideas.hasMany(db.likes)
db.likes.belongsTo(db.ideas)

// comments - replies
db.comments.hasMany(db.replies)
db.replies.belongsTo(db.comments)

db.sequelize = sequelize
db.Sequelize = Sequelize
*/
module.exports = sequelize
