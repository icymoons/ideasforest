const express = require('express')
const userProfileController = require('../controllers/userProfileController')
const authMiddleware = require('../middlewares/authMiddleware')

const userProfileRouter = express.Router()

const routerRoot = '/user-profile'

userProfileRouter.post(`${routerRoot}/get`, authMiddleware.inOutAccess, userProfileController.getUserProfileGet)

userProfileRouter.get(`${routerRoot}/get-self`, authMiddleware.inAccess, userProfileController.getSelfUserProfilePost)

userProfileRouter.get(`${routerRoot}/update/description`, authMiddleware.inAccess, userProfileController.updateSelfUserProfileDescriptionPost)

userProfileRouter.get(`${routerRoot}/update/photo`, authMiddleware.inAccess, userProfileController.updateSelfUserProfilePhotoPost)

module.exports = userProfileRouter
