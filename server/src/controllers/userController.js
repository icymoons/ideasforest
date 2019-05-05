const userService = require('../services/userService')
const constants = require('../constants')

module.exports = {
  async getUserGet (req, res) {
    try {
      const userId = req.params.id
      const userData = await userService.getUserById(userId)
      if (!userData) res.status(constants.DEFAULT_STATUS).end()
      res.send(userData)
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  },
  async getSelfUserPost (req, res) {
    try {
      const userId = req.params.id
      const userData = await userService.getUserById(userId)
      if (!userData) res.status(constants.ERROR_STATUS).end()
      res.send(userData)
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  },
  async updateUserPost (req, res) {
    res.status(constants.ERROR_STATUS).send('Not programmed yet.')
  }
}
