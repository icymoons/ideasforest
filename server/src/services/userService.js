const { users } = require('../models')

module.exports = {
    async getUser(userId) {
        try {
            return await users.findOne({
                where: {
                    id: userId
                }
            })
        } catch (error) {
            throw new Error(error)
        }
    },
    async createUser(userName, email, password) {
        try {
            return await users.create({
                userName,
                email,
                password
            })
        } catch (error) {
            throw new Error(error)
        }
    },
    async updateUser(userId, userName, email, password) {
        try {
            return await users.updateOne({
                userId,
                firstName,
                lastName,
                pseudo,
                email,
                password
            })
        } catch (error) {
            throw new Error(error)
        }
    }

}