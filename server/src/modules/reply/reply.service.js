const replyModel = require('./reply.model')

module.exports = {
  async createReply (userId, commentId, content) {
    try {
      return await replyModel.create({ userId, commentId, content })
    } catch (error) {
      throw new Error(error)
    }
  }
}
