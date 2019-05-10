const { ideas } = require('../models')

module.exports = {
  async createIdea (userId, title, description, tags) {
    try {
      return await ideas.create({ userId, title, description, tags })
    } catch (error) {
      throw new Error(error)
    }
  },
  async browseIdeas () {
    try {
      const ideasList = await ideas.findAll()
      if (!ideasList) return null
      return await Promise.all(ideasList.map(async idea => {
        const likes = await idea.getLikes()
        return { idea, user: await idea.getUser(), likesNumber: likes ? likes.length : 0 }
      }))
    } catch (error) {
      throw new Error(error)
    }
  },
  async getIdeaPage (ideaId) {
    try {
      const idea = await ideas.findOne({
        where: { id: ideaId }
      })
      if (!idea) return null
      const ideaUser = await idea.getUser()
      const ideaUserProfile = ideaUser ? await ideaUser.getProfile() : null
      const comments = await idea.getComments()
      const commentsData = await Promise.all(comments.map(async comment => {
        const commentUser = await comment.getUser()
        const commentUserProfile = commentUser ? await commentUser.getProfile() : null
        const replies = await comment.getReplies()
        const repliesData = await Promise.all(replies.map(async reply => {
          const replyUser = await reply.getUser()
          const replyUserProfile = replyUser ? await replyUser.getProfile() : null
          return { reply, user: replyUser ? { userId: replyUser.id, pseudo: replyUser.pseudo, photo: replyUserProfile.photo } : null }
        }))
        return { comment, user: { userId: commentUser.id, pseudo: commentUser.pseudo, photo: commentUserProfile.photo }, repliesData }
      }))
      return { idea, user: { userId: ideaUser.id, pseudo: ideaUser.pseudo, photo: ideaUserProfile.photo }, commentsData }
    } catch (error) {
      throw new Error(error)
    }
  }
}
