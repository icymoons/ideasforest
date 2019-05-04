const express = require('express')
const authController = require('./like.controller')
const authMiddleware = require('../auth/auth.middleware')

const likeRouter = express.Router()

const routerRoot = '/like'

likeRouter.post(`${routerRoot}/create`, authMiddleware.outAccess, authController.registerPost)

likeRouter.post(`${routerRoot}/delete`, authMiddleware.outAccess, authController.registerPost)

module.exports = likeRouter
