const { ideaController, userController, commentController, replyController,
  likeController } = require('./controllers')
const { authMiddleware } = require('./middlewares')
const express = require('express')

module.exports = (app) => {
  const apiRoot = '/api'
  // main routes
  const ideaRouter = express.Router()
  ideaRouter.get('/browse-ideas', authMiddleware.inOutAccess,
    ideaController.browseIdeasPost)

  ideaRouter.post('/create-idea', authMiddleware.inOutAccess,
    ideaController.createIdeaPost)

  ideaRouter.get('/get-idea/:id', ideaController.getIdeaPageGet)

  ideaRouter.get('/get-account/:id', userController.getUserGet)

  app.use(apiRoot + '/main', ideaRouter)

  // user routes
  const userRouter = express.Router()
  userRouter.post('/register', authMiddleware.outAccess,
    userController.registerPost)

  userRouter.post('/signin', authMiddleware.outAccess,
    userController.signInPost)

  userRouter.get('/get-self-account', authMiddleware.inAccess,
    userController.getSelfUserPost)

  userRouter.get('/update-account', authMiddleware.inAccess,
    userController.updateUserPost)

  userRouter.post('/unsubscribe', authMiddleware.inAccess,
    userController.unsubscribeUserPost)

  userRouter.post('/create-comment', authMiddleware.inAccess,
    commentController.createCommentPost)

  userRouter.post('/create-reply', authMiddleware.inAccess,
    replyController.createReplyPost)

  userRouter.post('/create-like', authMiddleware.inAccess,
    likeController.createLikePost)

  app.use(apiRoot + '/user', userRouter)
}
