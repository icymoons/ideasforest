const { userModel } = require('../models')
const bcrypt = require('bcrypt')
const constants = require('../lib/constants')

module.exports = {
  async createUser (pseudo, email, password) {
    try {
      const hashedPassword = bcrypt.hashSync(password, constants.SALT_ROUNDS_BCRYPT)
      return await userModel.create({ pseudo, email, password: hashedPassword })
    } catch (error) {
      throw new Error(error)
    }
  },
  async updateUserPseudo (userId, pseudo) {
    try {
      return await userModel.update({ pseudo }, { where: { id: userId } })
    } catch (error) {
      throw new Error(error)
    }
  },
  async updateUserEmail (userId, email) {
    try {
      return await userModel.update({ email }, { where: { id: userId } })
    } catch (error) {
      throw new Error(error)
    }
  },
  async updateUserPassword (userId, password) {
    try {
      const hashedPassword = bcrypt.hashSync(password, constants.SALT_ROUNDS_BCRYPT)
      return await userModel.update({ password: hashedPassword }, { where: { id: userId } })
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
        where: { email } })
    } catch (error) {
      throw new Error(error)
    }
  }
}
