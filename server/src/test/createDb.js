const { users, replies, ideas, Likes, comments } = require('../models')

module.exports = async function (req, res) {
    try {
        const user1 = await users.create({
            firstName: "rivel",
            lastName: "Babindamana",
            pseudo: "bibiche",
            email: "rivel@gmail.com",
            password: "azerty"
        })

        const user2 = await users.create({
            firstName: "Aurel",
            lastName: "de Peyrelongue",
            pseudo: "muramasa",
            email: "muramasa@gmail.com",
            password: "azerty"
        })
        const idea1 = await ideas.create({
            userId: user1.id,
            title: "une eventBox pour Nanterre",
            description: "description de l'eventbox",
            tags: "ok+pourquoi+pas+c'est malin"
        })
        const idea2 = await ideas.create({
            userId: user2.id,
            title: "un brumisateur destressant utilisant des molécules végétales",
            description: "description d'un brumisateur permettant d'emmetre des molécules végétales ",
            tags: "sante+relaxation"
        })
        const comment1 = await comments.create({
            ideaId: idea1.id,
            userId: user2.id,
            content: "comment 0"
        })
        const comment2 = await comments.create({
            ideaId: idea1.id,
            userId: user2.id,
            content: "comment 1"
        })
        const reply1 = await replies.create({
            userId: user1.id,
            commentId: comment1.id,
            content: "reply 0"
        })
        const reply2 = await replies.create({
            userId: user1.id,
            commentId: comment2.id,
            content: "reply 1"
        })
        res.json(
            {
                user1, user2, idea1, idea2, comment1, comment2, reply1, reply2
            }
        )
    }
    catch (err) {
        res.send(err)
        console.log(err)
    }

}