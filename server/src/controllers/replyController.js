
const replyService = require('../services/replyService')
const constants = require('../lib/constants')

module.exports = {
  async createReplyPost (req, res) {
    const { firstName, lastName, pseudo, email, password } = req.body
    try {
      const userData = await replyService.createReply(firstName, lastName,
        pseudo, email, password)
      if (!userData) res.status(constants.ERROR_STATUS).end()
      res.status(constants.SUCCESS_STATUS).end()
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  }
}
