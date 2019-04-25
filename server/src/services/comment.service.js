const { comments } = require('../models')

module.exports = {
    async createComment(ideaId, userId, content) {
        try {
            return await comments.create({
                ideaId, userId, content
            })
        }
        catch (error) {
            throw new Error(error)
        }
    }
}