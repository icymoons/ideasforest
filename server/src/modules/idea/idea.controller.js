const ideaService = require('./idea.service')
const constants = require('../../constants')

module.exports = {
  async createIdeaPost (req, res) {
    try {
      const { title, description, tags } = req.body
      const userId = res.locals.decodedToken ? res.locals.decodedToken.id : null
      const ideasData = await ideaService.createIdea(userId, title, description, tags)
      if (!ideasData) res.status(constants.STATUS_NOT_FOUND).end()
      else { res.send(ideasData) }
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  },
  async browseIdeasPost (req, res) {
    try {
      const ideasData = await ideaService.browseIdeas()
      if (!ideasData) res.status(constants.STATUS_NOT_FOUND).end()
      res.send(ideasData)
    } catch (error) {
      console.trace(error)
      res.status(constants.ERROR_STATUS).end()
    }
  },
  async getIdeaPageGet (req, res) {
    try {
      const paramId = req.params.id
      const ideasData = await ideaService.getIdeaPage(paramId)
      if (!ideasData) res.status(constants.STATUS_NOT_FOUND).end()
      res.send(ideasData)
    } catch (error) {
      console.trace(error)
      res.status(constants.SUCCESS_STATUS).end()
    }
  }
}
