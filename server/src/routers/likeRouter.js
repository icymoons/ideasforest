const express = require('express')
const likeController = require('../controllers/likeController')
const authMiddleware = require('../middlewares/authMiddleware')

const likeRouter = express.Router()

const routerRoot = '/like'

likeRouter.post(`${routerRoot}/create`, authMiddleware.outAccess, likeController.createLikePost)

module.exports = likeRouter
