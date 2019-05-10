const userService = require('../services/userService')
const constants = require('../lib/constants')
const messages = require('../lib/messages')

module.exports = {
  async getSelfUserPrivateInformationsPost (req, res) {
    try {
      const userId = req.params.id
      const userData = await userService.getUserById(userId)
      if (!userData) res.status(constants.ERROR_STATUS).end()
      res.send({ pseudo: userData.pseudo, email: userData.email })
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  },
  async updateSelfUserPseudoPost (req, res) {
    const { pseudo } = req.body
    try {
      const userId = res.locals.user.id
      const userData = userService.updateUserPseudo(userId, pseudo)
      if (!userData) {
        res.status(constants.ERROR_STATUS).json(
          { message: messages.UNKNOWN_USER })
      }
      res.status(constants.SUCCESS_STATUS).json({ message: messages.UNKNOWN_USER })
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  },
  async updateSelfUserEmailPost (req, res) {
    const { email } = req.body
    try {
      const userId = res.locals.user.id
      const userData = userService.updateUserEmail(userId, email)
      if (!userData) {
        res.status(constants.ERROR_STATUS).json({
          message: messages.UNKNOWN_USER })
      }
      res.status(constants.SUCCESS_STATUS).json({ message: 'Email modifié avec succès' })
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  },
  async updateSelfUserPasswordPost (req, res) {
    const { pseudo } = req.body
    try {
      const userId = res.locals.user.id
      const userData = userService.updateUser(userId, pseudo)
      if (!userData) {
        res.status(constants.ERROR_STATUS).json({
          message: messages.UNKNOWN_USER })
      }
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  }
}
