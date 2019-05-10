
const userProfileService = require('../services/userProfileService')
const constants = require('../lib/constants')
const messages = require('../lib/messages')

module.exports = {
  async getUserProfileGet (req, res) {
    try {
      const userId = req.params.id
      const userData = await userProfileService.getUserById(userId)
      if (!userData) res.status(constants.DEFAULT_STATUS).end()
      res.send(userData)
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  },
  async getSelfUserProfilePost (req, res) {
    try {
      const userId = res.locals.user.id
      const userData = await userProfileService.getUserById(userId)
      if (!userData) res.status(constants.ERROR_STATUS).end()
      res.send(userData)
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  },
  async updateSelfUserProfilePhotoPost (req, res) {
    const { pseudo } = req.body
    try {
      const userId = res.locals.user.id
      const userData = userProfileService.updateUser(userId, pseudo)
      if (!userData) {
        res.status(constants.ERROR_STATUS).json({
          message: messages.UNKNOWN_USER })
      }
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  },
  async updateSelfUserProfileDescriptionPost (req, res) {
    const { pseudo } = req.body
    try {
      const userId = res.locals.user.id
      const userData = userProfileService.updateUser(userId, pseudo)
      if (!userData) {
        res.status(constants.ERROR_STATUS).json(
          { message: messages.UNKNOWN_USER })
      }
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  }
}
