const { ideas } = require('../models')

module.exports = {
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
            const ideasData = await Promise.all(ideasPromises)
            res.send(ideasData)
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
            return { idea, ideaUser, commentsData }
        } catch (error) {
            throw new Error(error)
        }
    }
}