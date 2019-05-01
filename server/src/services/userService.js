const { users } = require('../models')
const bcrypt = require('bcrypt')
const config = require('../config')

module.exports = {
  async getUserById (userId) {
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
  async getUserByEmail (email) {
    try {
      return await users.findOne({
        where: {
          email
        }
      })
    } catch (error) {
      throw new Error(error)
    }
  },
  async createUser (pseudo, email, password) {
    try {
      const hashedPassword = await bcrypt.hash(
        password,
        config.saltRounds)
      return await users.create({
        pseudo,
        email,
        password: hashedPassword
      })
    } catch (error) {
      throw new Error(error)
    }
  },
  async updateUser (userId, pseudo, email, password) {
    try {
      return await users.updateOne({
        userId,
        pseudo,
        email,
        password
      })
    } catch (error) {
      throw new Error(error)
    }
  }

}
