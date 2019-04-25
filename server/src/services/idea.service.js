const { ideas } = require('../models')

module.exports = {
    async createIdea(userId, title, description, tags) {
        try {
            return await ideas.create({
                userId, title, description, tags
            })
        } catch (error) {
            throw new Error(error)
        }
    },
    async browseIdeas() {
        try {
            const ideasList = await ideas.findAll()
            if (!ideasList) return null
            const ideasPromises = ideasList.map(async idea => {
                return {
                    idea,
                    user: await idea.getUser()
                }
            })
            return await Promise.all(ideasPromises)
        } catch (error) {
            throw new Error(error)
        }
    },
    async getIdeaPage(ideaId) {
        try {
            const idea = await ideas.findOne({
                where: { id: ideaId }
            })
            if (!idea) return null
            const ideaUser = await idea.getUser()
            const comments = await idea.getComments()
            const commentsPromises = comments.map(async comment => {
                const commentUser = await comment.getUser()
                const replies = await comment.getReplies()
                const repliesPromises = replies.map(async reply => {
                    return {
                        reply,
                        user: await reply.getUser()
                    }
                })
                const repliesData = await Promise.all(repliesPromises)
                return { comment, user: commentUser, repliesData }
            })
            const commentsData = await Promise.all(commentsPromises)
            return { idea, user: ideaUser, commentsData }
        } catch (error) {
            throw new Error(error)
        }
    }
}