const dbname = "ideasforest"
module.exports = {
    port: process.env.port || 8081,
    db: {
        database: process.env.DB_NAME || dbname,
        user: process.env.DB_USER || dbname,
        idea: process.env.DB_IDEA || dbname,
        comment: process.env.DB_COMMENT || dbname,
        like: process.env.DB_LIKE || dbname,
        password: process.env.DB_PASS || dbname,
        options: {
            dialect: process.env.DIALECT || "sqlite",
            host: process.env.HOST || "localhost",
            storage: "./" + dbname + ".sqlite3"
        }
    }
}