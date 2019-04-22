const { users } = require('../models')

module.exports = {
    async getUser(userId) {
        try {
            const user = await users.findOne({
                where: {
                    id: userId
                }
            })
            return user
        } catch (error) {
            throw new Error(error)
        }
    },
    async createUser(firstName, lastName, pseudo, email, password) {
        try {
            const user = await users.create({
                firstName, lastName, pseudo, email, password
            })
            return user
        } catch (error) {
            throw new Error(error)
        }
    },
    async updateUser(userId, firstName, lastName, pseudo, email, password) {
        try {
            const user = await users.updateOne({
                userId, firstName, lastName, pseudo, email, password
            })
            return user
        } catch (error) {
            throw new Error(error)
        }
    }

}