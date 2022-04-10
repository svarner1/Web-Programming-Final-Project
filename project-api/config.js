require("dotenv").config()
require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001
const SECRET_KEY = process.env.SECRET_KEY || "secret_dev"

function getDatabaseUri() {
    const dbUser = process.env.DATABASE_USER || "postgres"
    //if the database exists in the process.env encode it otherwise use postgres
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) :  "postgres"
    const dbHost = process.env.DATABASE_HOST || "localhost"
    const dbPort = process.env.DATABASE_PORT || 5432
    const dbName = process.env.DATABASE_NAME || "final_project"

    //if the DATABASE_URL environment variable, use that,
    //otherwise create the db connection string ourselves
    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
}

const BCRYPT_WORK_FACTOR = 13

console.log("Final Project Config:".red)
console.log("PORT:".blue, PORT)
console.log("SECRET_KEY".blue, PORT)
console.log("Database URI:".blue, getDatabaseUri())
console.log("---")

module.exports = {
    PORT,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR,
    getDatabaseUri
}
