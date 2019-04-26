const { userController } = require("../controllers")

module.exports = (app) => {
    app.post('/register', userController.register)
    app.post('/signin', userController.signin)
    app.post('/signout', userController.signout)
    app.get('/my-account', userController.get)
    app.get('/my-account/update', userController.update)
    app.post('/my-account/unsubscribe', userController.unsubscribe)
}