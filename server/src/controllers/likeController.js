const { repliesService } = require('../services')
const status = require('../status')

module.exports = {
  async createLikePost (req, res) {
    const { userId, ideaId } = req.body
    try {
      if (!userId || !ideaId) status.default(res)
      const userData = await repliesService.createLike(userId, ideaId)
      if (!userData) status.default(res)
      status.success(res)
    } catch (error) {
      console.trace(error)
      status.error(res)
    }
  }
}
