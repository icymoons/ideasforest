const { comments } = require('../models')

module.exports = {
  async createComment (userId, ideaId, content) {
    try {
      return await comments.create({
        userId,
        ideaId,
        content
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}
