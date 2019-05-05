const likeService = require('../services/likeService')
const constants = require('../constants')

module.exports = {
  async createLikePost (req, res) {
    const { userId, ideaId } = req.body
    try {
      if (!userId || !ideaId) res.status(constants.ERROR_STATUS).end()
      const userData = await likeService.createLike(userId, ideaId)
      if (!userData) res.status(constants.ERROR_STATUS).end()
      res.status(constants.SUCCESS_STATUS).end()
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  }
}
