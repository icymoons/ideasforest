const { profileModel } = require('../models')

module.exports = {
  async createProfile (userId) {
    try {
      return await profileModel.create({ userId, description: null, photo: null })
    } catch (error) {
      throw new Error(error)
    }
  },
  async updateDescription (userId, description) {
    try {
      return await profileModel.update({ description }, { where: { userId } })
    } catch (error) {
      throw new Error(error)
    }
  },
  async updatePhoto (userId, photo) {
    try {
      return await profileModel.update({ photo }, { where: { userId } })
    } catch (error) {
      throw new Error(error)
    }
  }
}
