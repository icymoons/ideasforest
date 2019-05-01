const dbname = 'ideasforest'
module.exports = {
  port: process.env.port || 8081,
  secret: 'W2s78r9fdsf7qsEdq74d979e86zuo3ii2r23uo3u89e798r7',
  saltRounds: 26,
  db: {
    database: process.env.DB_NAME || dbname,
    user: process.env.DB_USER || dbname,
    password: process.env.DB_PASS || dbname,
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './' + dbname + '.sqlite3'
    }
  }
}
