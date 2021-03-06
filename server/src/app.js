const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config')
const { sequelize } = require('./models')
const routes = require('./routes')
const constants = require('./constants')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

routes(app)

app.use(function (req, res, next) {
  res.status(constants.STATUS_NOT_FOUND).json({ default: true })
})

sequelize.sync().then(() => {
  app.listen(config.port)
  console.log('Server started on port ' + config.port)
})
