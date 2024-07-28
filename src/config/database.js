const dotenv = require("dotenv")
const mysql = require('mysql2')
dotenv.config()
const dbPool  = mysql.createPool({
    host            : process.env.HOST,
    user            : process.env.USERDB,
    password        : process.env.PASSWORD,
    database        : process.env.DATABASE
  });

module.exports = dbPool.promise();