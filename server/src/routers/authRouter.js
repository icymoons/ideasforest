const express = require('express')
const authController = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')

const authRouter = express.Router()

const routerRoot = '/like'

authRouter.post(`${routerRoot}/register`, authMiddleware.outAccess, authController.registerPost)

authRouter.post(`${routerRoot}/signin`, authMiddleware.outAccess, authController.signInPost)

authRouter.post(`${routerRoot}/signout`, authMiddleware.inAccess, authController.signOutPost)

module.exports = authRouter
