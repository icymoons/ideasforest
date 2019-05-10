const jwt = require('jsonwebtoken')
const config = require('../config')
const constants = require('../lib/constants')
const userService = require('../services/userService')

module.exports = {
  async inAccess (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    if (token) {
      try {
        const decodedToken = jwt.verify(token, config.secret)
        const user = await userService.getUserById(decodedToken.userId)
        if (user) {
          res.locals.user = user
          next()
        } else {
          res.status(constants.UNAUTHORIZED_STATUS).end()
        }
      } catch (error) {
        console.trace(error)
        res.status(constants.ERROR_STATUS).end()
      }
    }
  },
  async inOutAccess (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    if (token) {
      try {
        const decodedToken = jwt.verify(token, config.secret)
        const user = await userService.getUserById(decodedToken.userId)
        if (user) {
          res.locals.user = user
        }
        next()
      } catch (error) {
        console.trace(error)
        res.status(constants.ERROR_STATUS).end()
      }
    }
    res.status(constants.AUTH_FAILED_STATUS).end()
  },
  outAccess (req, res, next) {
    next()
  }

}
