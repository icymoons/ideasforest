const { repliesService } = require('../services')
const { status } = require('../config')

module.exports = {
  async createLikePost (req, res) {
    const { userId, ideaId } = req.body
    try {
      if (!userId || !ideaId) status.default(res)
      const userData = await repliesService.createLike(userId, ideaId)
      if (!userData) res.status(status.notFound).end()
      res.status(status.success).end()
    } catch (error) {
      console.trace(error)
      status.error(res)
    }
  }
}
