const express = require('express')
const authController = require('./auth.controller')
const authMiddleware = require('./auth.middleware')

const authRouter = express.Router()
const routerRoot = '/like'

authRouter.post(`${routerRoot}/register`, authMiddleware.outAccess, authController.registerPost)

authRouter.post(`${routerRoot}/signin`, authMiddleware.outAccess, authController.signInPost)

authRouter.post(`${routerRoot}/signout`, authMiddleware.inAccess, authController.signOutPost)

authRouter.post(`${routerRoot}/unsubscribe`, authMiddleware.inAccess, authController.unsubscribeUserPost)

module.exports = authRouter
