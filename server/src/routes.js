const express = require('express')

module.exports = (app) => {
  const apiRoot = '/api'
  // main routers
  const authRouter = require('./modules/auth/auth.router')
  const commentRouter = require('./modules/comment/comment.router')
  const ideaRouter = require('./modules/idea/idea.router')
  const likeRouter = require('./modules/like/like.router')
  const replyRouter = require('./modules/reply/reply.router')
  const userRouter = require('./modules/user/user.router')

  app.use(apiRoot, authRouter)
  app.use(apiRoot, commentRouter)
  app.use(apiRoot, ideaRouter)
  app.use(apiRoot, likeRouter)
  app.use(apiRoot, replyRouter)
  app.use(apiRoot, userRouter)

  // tests
  const testRouter = express.Router()
  testRouter.get('/create-db', require('./tests/createDb'))
  app.use(apiRoot + '/test', testRouter)
}
