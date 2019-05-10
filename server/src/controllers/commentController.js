const commentService = require('../services/commentService')
const constants = require('../lib/constants')

module.exports = {
  async createCommentPost (req, res) {
    const { title, content, tags } = req.body
    try {
      const userData = await commentService.createComment(title, content, tags)
      if (!userData) res.status(constants.ERROR_STATUS).end()
      res.status(constants.SUCCESS_STATUS).end()
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  }
}
