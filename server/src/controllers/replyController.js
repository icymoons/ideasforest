const { repliesService } = require('../services')
const status = require('../status')

module.exports = {
  async createReplyPost (req, res) {
    const { firstName, lastName, pseudo, email, password } = req.body
    try {
      const userData = await repliesService.createReply(firstName, lastName, pseudo, email, password)
      if (!userData) status.default(res)
      status.success(res)
    } catch (error) {
      console.trace(error)
      status.error(res)
    }
  }
}
