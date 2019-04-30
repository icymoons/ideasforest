const jwt = require("jsonwebtoken")
const config = require("../config")
const status = require('../status')

module.exports = {
    strictAccess(req, res, next) {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token) {
            try {
                const decoded = jwt.verify(token, config.secret);
                res.locals.decodedToken = decoded
                next()
            }
            catch (error) {
                console.trace(error)
                status.error(res)
            }
        }
        status.authFailed(res)
    },
    bothAccess(req, res, next) {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token) {
            try {
                const decoded = jwt.verify(token, config.secret);
                res.locals.decodedToken = decoded
                next()
            }
            catch (error) {
                console.trace(error)
                status.error(res)
            }
        }
        next()
    }


}