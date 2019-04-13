
class UserController {
    constructor(){
        const {User} = require('../models')
        this.user = User;
    }
    async register(req, res){
        try {
            const user = await this.user.create(req.body)
        } catch (error) {
            res.status(400).send({
                error: "Erreur lors de la création du compte"
            })
            
        }


    }
}