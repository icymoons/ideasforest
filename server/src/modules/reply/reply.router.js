const express = require('express')
const replyController = require('./reply.controller')
const authMiddleware = require('../auth/auth.middleware')

const replyRouter = express.Router()
const routerRoot = '/reply'

replyRouter.post(`${routerRoot}/create`, authMiddleware.outAccess, replyController.registerPost)

replyRouter.post(`${routerRoot}/delete`, authMiddleware.outAccess, replyController.registerPost)

module.exports = replyRouter
