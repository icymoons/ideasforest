const { profileModel } = require('../models')

module.exports = {
  async createProfile (userId) {
    try {
      return await profileModel.create({ userId })
    } catch (error) {
      throw new Error(error)
    }
  },
  async updateDescription (description) {
    try {
      return await profileModel.update({}, { description })
    } catch (error) {
      throw new Error(error)
    }
  },
  async updatePhoto (description) {
    try {
      return await profileModel.update({}, { description })
    } catch (error) {
      throw new Error(error)
    }
  }
}
