const bcrypt = require('bcrypt')
const constants = require('../../constants')
const userModel = require('./user.model')

module.exports = {
  async createUser (pseudo, email, password) {
    try {
      const hashedPassword = bcrypt.hashSync(password, constants.SALT_ROUNDS_BCRYPT)

      return await userModel.create({ pseudo, email, password: hashedPassword })
    } catch (error) {
      throw new Error(error)
    }
  },
  async updateUser (userId, pseudo, email, password) {
    try {
      return await userModel.updateOne({ userId, pseudo, email, password })
    } catch (error) {
      throw new Error(error)
    }
  },
  async getUserById (userId) {
    try {
      return await userModel.findOne({ where: { id: userId } })
    } catch (error) {
      throw new Error(error)
    }
  },
  async getUserByEmail (email) {
    try {
      return await userModel.findOne({
        where: {
          email
        }
      })
    } catch (error) {
      throw new Error(error)
    }
  }
}
