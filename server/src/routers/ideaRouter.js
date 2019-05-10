const express = require('express')
const ideaController = require('../controllers/ideaController')
const authMiddleware = require('../middlewares/authMiddleware')

const ideaRouter = express.Router()

const routerRoot = '/idea'

ideaRouter.get(`${routerRoot}/browse`, authMiddleware.inOutAccess, ideaController.browseIdeasPost)

ideaRouter.post(`${routerRoot}/create`, authMiddleware.inOutAccess, ideaController.createIdeaPost)

ideaRouter.get(`${routerRoot}/get/:id`, ideaController.getIdeaPageGet)

module.exports = ideaRouter
