const { commentsService } = require('../services')
const { status } = require('../status')

module.exports = {
    async createCommentPost(req, res) {
        const { title, content, tags } = req.body
        try {
            const userData = await commentsService.createComment(title, content, tags)
            if (!userData) status.default(res)
            status.success(res)
        } catch (error) {
            status.default(res)
            console.log(error)
        }
    }
}