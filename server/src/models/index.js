const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const config = require("../config")
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)

fs.readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js')
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    });

//relations
db.users.hasMany(db.ideas);
db.ideas.belongsTo(db.users);

// comments 
db.users.hasMany(db.comments);
db.comments.belongsTo(db.users);

db.ideas.hasMany(db.comments);
db.comments.belongsTo(db.ideas);

// replies  
db.comments.hasMany(db.replies);
db.replies.belongsTo(db.comments);

db.users.hasMany(db.replies);
db.replies.belongsTo(db.users);

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db