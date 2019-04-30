const { ideasService } = require('../services')
const { status } = require('../status')

module.exports = {
    async createIdeasPost(req, res) {
        try {
            const ideasData = await ideasService.browseIdeas()
            if (!ideasData) status.default(res)
            res.send(ideasData)
        } catch (error) {
            status.error(res)
            console.log(error)
        }
    },
    async browseIdeasPost(req, res) {
        try {
            const ideasData = await ideasService.browseIdeas()
            if (!ideasData) status.default(res)
            res.send(ideasData)
        } catch (error) {
            status.error(res)
            console.log(error)
        }
    },
    async getIdeaPageGet(req, res) {
        try {
            const paramId = req.params.id
            const ideasData = await ideasService.getIdeaPage(paramId)
            if (!ideasData) status.default(res)
            res.send(ideasData)
        } catch (error) {
            status.error(res)
            console.log(error)
        }
    }
}