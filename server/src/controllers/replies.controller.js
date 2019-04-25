const { repliesService } = require('../services')
const { redirect } = require('../helpers')

module.exports = {
    async createReplyPost(req, res) {
        const { firstName, lastName, pseudo, email, password } = req.body
        try {
            const userData = await repliesService.createReply(firstName, lastName, pseudo, email, password)
            if (!userData) redirect.default(res)
            redirect.success(res)
        } catch (error) {
            res.send(error)
            console.log(error)
        }
    },
}