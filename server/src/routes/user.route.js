const { userController } = require("../controllers")

module.exports = (app) => {
    app.get('/my-account', userController.get)
    app.get('/my-account/update', userController.update)
    app.post('/my-account/unsubscribe', userController.unsubscribe)
}