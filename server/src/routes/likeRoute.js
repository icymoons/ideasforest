const { likeController } = require("../controllers")

module.exports = (app) => {
    app.post('/like', likeController.createLike);
}