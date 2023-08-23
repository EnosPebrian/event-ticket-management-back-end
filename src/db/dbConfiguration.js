require("dotenv").config;

const mysql = require("mysql2");
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
});

db.connect((err) => {
  if (err) console.log(err);
  console.log(`mysql connected`);
});

module.exports = db;
