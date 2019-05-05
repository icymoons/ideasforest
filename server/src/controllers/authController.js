const userService = require('../services/userService')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const constants = require('../constants')

module.exports = {
  async registerPost (req, res) {
    const { pseudo, email, password } = req.body
    try {
      const userData = await userService.createUser(pseudo, email, password)
      if (!userData) res.status(constants.ERROR_STATUS).end()
      res.status(constants.SUCCESS_STATUS).end()
    } catch (error) {
      console.trace(error)
      res.status(constants.SUCCESS_STATUS).end()
    }
  },
  async signInPost (req, res) {
    try {
      const { email, password } = req.body
      const userData = await userService.getUserByEmail(email)
      if (!userData) res.status(constants.SUCCESS_STATUS).end()
      const testPassword = await bcrypt.compare(password, userData.password)
      if (testPassword) {
        const JWTToken = jwt.sign({ email: userData.email, id: userData.id },
          constants.TOKEN_HASH_KEY, { expiresIn: '24h' })
        res.status(constants.SUCCESS_STATUS).json({
          token: JWTToken
        })
      } else { res.status(constants.AUTH_FAILED_STATUS).end() }
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  },
  async signOutPost (req, res) {
    res.status(constants.ERROR_STATUS).send('Not programmed yet.')
  },
  async unsubscribePost (req, res) {
    res.status(constants.ERROR_STATUS).send('Not programmed yet.')
  }
}
