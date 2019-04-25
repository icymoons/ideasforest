const { replies } = require('../models')

module.exports = {
    async createReply() {
        try {
            return await replies.create({
                commentId,
                userId,
                content
            })
        }
        catch (error) {
            throw new Error(error)
        }
    }
}