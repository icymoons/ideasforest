const { users } = require('../models')

module.exports = {
    async getUser(userId) {
        try {
            const user = await users.findOne({
                where: {
                    id: userId
                }
            })
            if (!user) return null
            return user
        } catch (error) {
            throw new Error(error)
        }
    },
    async createUser() {

    },
    async updateUser() {

    }

}