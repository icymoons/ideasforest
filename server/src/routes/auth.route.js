const { authController } = require("../controllers")

module.exports = (app) => {
    app.post('/register', authController.register)
    app.post('/signin', authController.signin)
    app.post('/signout', authController.signout)
}