const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "YOUR_DB_USER",
  password: "YOUR_DB_PASSWORD",
  database: "YOUR_DB_NAME",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = db;
