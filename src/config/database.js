require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT,
    max: 20,
    idleTimeoutMillis: 2000,
    connectionTimeoutMillis: 2000,
})

module.exports = pool;
