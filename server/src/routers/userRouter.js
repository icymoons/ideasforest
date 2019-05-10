const express = require('express')
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

const userRouter = express.Router()
const routerRoot = '/user'

userRouter.post(`${routerRoot}/get`, authMiddleware.inOutAccess, userController.getUserGet)

userRouter.get(`${routerRoot}/get-self`, authMiddleware.inAccess, userController.getSelfUserPost)

userRouter.get(`${routerRoot}/update`, authMiddleware.inAccess, userController.updateUserPost)

module.exports = userRouter
