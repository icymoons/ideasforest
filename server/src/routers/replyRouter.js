const express = require('express')
const replyController = require('../controllers/replyController')
const authMiddleware = require('../middlewares/authMiddleware')

const replyRouter = express.Router()

const routerRoot = '/reply'

replyRouter.post(`${routerRoot}/create`, authMiddleware.outAccess, replyController.createReplyPost)

module.exports = replyRouter
