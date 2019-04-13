const AuthentificationController = require("./controllers/AuthentificationController")


module.exports = (app) => {

    /* Idea controller */

    app.get('/', BrowseController.getIdeas);

    app.post('/ajouter-une-idee', AddIdeaController.createIdea)

    app.post('/idee/:id', IdeaDetailsController.getIdea)

    /* User controller */

    app.post('/authentification', AuthentificationController.register)

    app.post('/inscription', UserController.createAccount)

    app.post('/mon-compte', UserController.getMyAccount)

    app.post('/compte/:id',UserController.getOneAccount)

    app.post('/se-desinscrire',UserController.unsubscribe)



}