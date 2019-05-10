const express = require('express')

module.exports = (app) => {
  const apiRoot = '/api'
  // main routers
  const authRouter = require('./routers/authRouter')
  const commentRouter = require('./routers/commentRouter')
  const ideaRouter = require('./routers/ideaRouter')
  const likeRouter = require('./routers/likeRouter')
  const replyRouter = require('./routers/replyRouter')
  const userRouter = require('./routers/userRouter')
  const userProfileRouter = require('./routers/userProfileRouter')

  app.use(apiRoot, authRouter)
  app.use(apiRoot, commentRouter)
  app.use(apiRoot, ideaRouter)
  app.use(apiRoot, likeRouter)
  app.use(apiRoot, replyRouter)
  app.use(apiRoot, userRouter)
  app.use(apiRoot, userProfileRouter)

  // tests
  const testRouter = express.Router()
  testRouter.get('/create-db', require('./tests/createDb'))
  app.use(`${apiRoot}/create-db`, testRouter)
}
