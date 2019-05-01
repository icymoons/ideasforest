const { ideas } = require('../models')

module.exports = {
  async createIdea (userId, title, description, tags) {
    try {
      return await ideas.create({
        userId,
        title,
        description,
        tags
      })
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
        return {
          idea,
          user: await idea.getUser(),
          likesNumber: likes ? likes.length : 0
        }
      }))
    } catch (error) {
      throw new Error(error)
    }
  },
  async getIdeaPage (ideaId) {
    try {
      const idea = await ideas.findOne({
        where: {
          id: ideaId
        }
      })
      if (!idea) return null
      const ideaUser = await idea.getUser()
      const comments = await idea.getComments()
      const commentsData = await Promise.all(comments.map(async comment => {
        const commentUser = await comment.getUser()
        const replies = await comment.getReplies()
        const repliesData = await Promise.all(replies.map(async reply => {
          return {
            reply,
            user: await reply.getUser()
          }
        }))
        return {
          comment,
          user: commentUser,
          repliesData
        }
      }))
      return {
        idea,
        user: ideaUser,
        commentsData
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
