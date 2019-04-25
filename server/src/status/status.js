module.exports = {
    success(res) {
        res.json({ success: true })
    },
    default(res) {
        res.json({ default: true })
    },
    error(res) {
        res.json({ error: true })
    }
}