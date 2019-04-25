const { commentsService } = require('../services')
const { redirect } = require('../helpers')

module.exports = {
    async createCommentPost(req, res) {
        const { firstName, lastName, pseudo, email, password } = req.body
        try {
            const userData = await commentsService.createUser(firstName, lastName, pseudo, email, password)
            if (!userData) redirect.default(res)
            redirect.success(res)
        } catch (error) {
            res.send(error)
            console.log(error)
        }
    }
}