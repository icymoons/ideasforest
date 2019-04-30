const { usersService } = require('../services')
const config = require('../config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

module.exports = {
    async registerPost(req, res) {
        const { username, email, password } = req.body
        try {
            const userData = await usersService.createUser(username, email, password)
            if (!userData) status.default(res)
            status.success(res)
        } catch (error) {
            console.trace(error)
            status.error(res)
        }
    },
    async signInPost(req, res) {
        try {
            const { email, password } = req.body
            const userData = await usersService.getUserByEmail(email)
            if (!userData) status.default(res)
            const testPassword = await bcrypt.compare(password, userData.password)
            if (testPassword) {
                const JWTToken = jwt.sign({
                    email: userData.email,
                    id: userData.id
                },
                    config.secret,
                    {
                        expiresIn: '24h'
                    });
                res.status(200).json({
                    token: JWTToken
                })
            }
            status.authFailed(res)
        }
        catch (error) {
            console.trace(error)
            status.error(res)
        }
    },
    async getUserGet(req, res) {
        try {
            const userId = req.params.id
            const userData = await usersService.getUserById(userId)
            if (!userData) status.default(res)
            res.send(user)
        } catch (error) {
            console.trace(error)
            status.error(res)
        }
    },
    async updateUserPost(req, res) {

    },
    async deleteUserPost(req, res) {

    },
}