const express = require('express')
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

const userRouter = express.Router()

const routerRoot = '/user'

userRouter.post(`${routerRoot}/get-self`, authMiddleware.inOutAccess, userController.getSelfUserPrivateInformationsPost)

userRouter.get(`${routerRoot}/update/pseudo`, authMiddleware.inAccess, userController.updateSelfUserPseudoPost)

userRouter.get(`${routerRoot}/update/email`, authMiddleware.inAccess, userController.updateSelfUserEmailPost)

userRouter.get(`${routerRoot}/update/password`, authMiddleware.inAccess, userController.updateSelfUserPasswordPost)

module.exports = userRouter
