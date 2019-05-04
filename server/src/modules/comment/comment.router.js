const authController = require('./user.controller')
const express = require('express')
const authMiddleware = require('../auth/auth.middleware')

const commentRouter = express.Router()

const routerRoot = '/comment'

commentRouter.post(`${routerRoot}/create`, authMiddleware.outAccess, authController.registerPost)

commentRouter.post(`${routerRoot}/delete`, authMiddleware.outAccess, authController.registerPost)

module.exports = commentRouter
