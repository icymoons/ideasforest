const { replies } = require('../models')

module.exports = {
  async createReply (userId, commentId, content) {
    try {
      return await replies.create({ userId, commentId, content })
    } catch (error) {
      throw new Error(error)
    }
  }
}
