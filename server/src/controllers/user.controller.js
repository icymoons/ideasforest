const { userService } = require('../services')
const { redirect } = require('../helpers')

module.exports = {
    async createUserPost(req, res) {
        const { firstName, lastName, pseudo, email, password } = req.body
        try {
            const userData = await userService.createUser(firstName, lastName, pseudo, email, password)
            if (!userData) redirect.default(res)
            redirect.success(res)
        } catch (error) {
            res.send(error)
            console.log(error)
        }
    },
    async getUserGet(req, res) {
        try {
            const userId = req.params.id
            const userData = await userService.getUser(userId)
            if (!userData) redirect.default(res)
            res.send(user)
        } catch (error) {
            res.send(error)
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