const { userService } = require('../services')

module.exports = {
    async getUser(req, res) {
        try {
            const userId = req.params.id
            const userData = await userService(userId)
            if (!userData) redirect.default(res)
            res.send(user)
        } catch (error) {
            res.send(error)
            console.log(error)
        }
    },
    async updateUser(req, res) {

    }
}