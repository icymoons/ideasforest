const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    const size = 300, array = []
    for (let i = 0; i < size; i++) {
        array.push(i)
    }
    res.send(array)
});

app.post('/register', (req, res) => {
    res.send({
        message: `Salut ${req.body.email} ! Content de te revoir ;)`
    })
});

app.listen(process.env.PORT || 8081)