const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs.readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[file.split('.')[0]] = model
  })

// users have replies
db.users.hasMany(db.replies)
db.replies.belongsTo(db.users)

// users have ideas
db.users.hasMany(db.ideas)
db.ideas.belongsTo(db.users)

// users have likes
db.users.hasMany(db.likes)
db.likes.belongsTo(db.users)

// users have comments
db.users.hasMany(db.comments)
db.comments.belongsTo(db.users)

// ideas have comments
db.ideas.hasMany(db.comments)
db.comments.belongsTo(db.ideas)

// ideas have likes
db.ideas.hasMany(db.likes)
db.likes.belongsTo(db.ideas)

// comments have replies
db.comments.hasMany(db.replies)
db.replies.belongsTo(db.comments)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
