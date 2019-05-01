module.exports = {
  success (res) {
    res.status(200).end()
  },
  default (res) {
    res.status(400).end()
  },
  error (res) {
    res.status(500).end()
  },
  authFailed (res) {
    res.status(503).end()
  }
}
