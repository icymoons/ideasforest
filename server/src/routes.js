const AuthentificationController = require("./controllers/AuthentificationController")

module.exports = (app) => {

    app.get('/', (req, res) => {
        const size = 300, array = []
        for (let i = 0; i < size; i++) {
            array.push(i)
        }
        res.send(array)
    });

    app.post('/register', AuthentificationController.register)
}