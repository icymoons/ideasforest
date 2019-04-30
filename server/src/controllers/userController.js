const { usersService } = require('../services')
const { redirect } = require('../helpers')

module.exports = {
    async createUserPost(req, res) {
        const { username, email, password } = req.body
        try {
            const userData = await usersService.createUser(username, email, password)
            if (!userData) status.default(res)
            status.success(res)
        } catch (error) {
            status.error(res)
            console.log(error)
        }
    },
    async getUserGet(req, res) {
        try {
            const userId = req.params.id
            const userData = await usersService.getUser(userId)
            if (!userData) status.default(res)
            res.send(user)
        } catch (error) {
            status.error(res)
            console.log(error)
        }
    },
    async updateUserPost(req, res) {

    },
    async deleteUserPost(req, res) {

    },
    async signInPost(req, res) {

    },
    async signOutPost(req, res) {

    }
}