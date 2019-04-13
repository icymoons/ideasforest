
class Idea {
    constructor(){
        const {Idea} = require('../models')
        this.model = Idea;
    }
    async register(req, res){
        try {
            const user = await user.create(req.body)
        } catch (error) {
            res.status(400).send({
                error: "Erreur lors de la création du compte"
            })
            
        }


    }
}