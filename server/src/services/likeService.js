const { likes } = require('../models')

module.exports = {
    async createLike(userId, ideaId) {
        try {
            return await likes.create({
                userId,
                ideaId
            })
        }
        catch (error) {
            throw new Error(error)
        }
    }
}