const { ideasService } = require('../services')
const { redirect } = require('../helpers')

module.exports = {
    async createIdeasPost(req, res) {
        try {
            const ideasData = await ideasService.browseIdeas()
            if (!ideasData) helpers.redirectDefault(res)
            res.send(ideasData)
        } catch (error) {
            res.send(error)
            console.log(error)
        }
    },
    async browseIdeasPost(req, res) {
        try {
            const ideasData = await ideasService.browseIdeas()
            if (!ideasData) helpers.redirectDefault(res)
            res.send(ideasData)
        } catch (error) {
            res.send(error)
            console.log(error)
        }
    },
    async getIdeaPageGet(req, res) {
        try {
            const paramId = req.params.id
            const ideasData = await ideasService.getIdeaPage(paramId)
            if (!ideasData) helpers.redirectDefault(res)
            res.send(ideasData)
        } catch (error) {
            res.status(400).json(error)
            console.log(error)
        }
    }
}