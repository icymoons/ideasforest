const express = require('express')
const commentController = require('../controllers/commentController')
const authMiddleware = require('../middlewares/authMiddleware')

const commentRouter = express.Router()

const routerRoot = '/comment'

commentRouter.post(`${routerRoot}/create`, authMiddleware.inAccess, commentController.createCommentPost)

module.exports = commentRouter
