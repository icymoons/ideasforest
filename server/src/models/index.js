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

// Initializes associations
Object.keys(db).forEach(key => {
  let model = db[key]
  if (model.associate) {
    model.associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
