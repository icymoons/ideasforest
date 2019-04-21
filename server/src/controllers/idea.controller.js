const { ideaService } = require('../services')
const helpers = require('../helpers')

module.exports = {
    async browseIdeas(req, res) {
        try {
            const ideasData = await ideaService.browse()
            if (!ideasData) return helpers.redirectDefault(res)
            res.send(ideasData)
        } catch (error) {
            res.send(error)
            console.log(error)
        }
    },
    async getIdeaPage(req, res) {
        try {
            const paramId = req.params.id
            const ideasData = await ideaService.getIdeaPage(paramId)
            if (!ideasData) return helpers.redirectDefault(res)
            res.send(ideasData)
        } catch (error) {
            res.status(400).json(error)
            console.log(error)
        }
    }
}