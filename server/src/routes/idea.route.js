const { ideaController } = require("../controllers")

module.exports = (app) => {
    app.get('/browse-ideas', ideaController.browseIdeas);
    app.get('/idea-details/:id', ideaController.getIdeaPage)
}