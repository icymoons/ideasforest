const fs = require('fs')
const path = require('path')

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    redirect: {
        default(res) {
            res.status(404).json({ default: true })
        },
        success(res) {
            res.json({ success: true })
        },
    },
    requireDir(dirName) {
        var exp = {}
        fs.readdirSync(dirName)
            .filter((file) =>
                file !== 'index.js')
            .forEach(file => {
                console.log(file)
                var splitted = file.split('.')
                exp[splitted[0] + capitalize(splitted[1])] = require(path.join(dirName, file))
            });
        return exp
    }
}