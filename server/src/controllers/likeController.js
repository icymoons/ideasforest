const { repliesService } = require('../services')
const status = require('../status')

module.exports = {
    async createLike(req, res) {
        const { userId, ideaId } = req.body
        try {
            const userData = await repliesService.createLike(userId, ideaId)
            if (!userData) status.default(res)
            status.success(res)
        } catch (error) {
            console.trace(error)
            status.error(res)
        }
    },
}