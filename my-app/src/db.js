const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",   // or your DB host
  user: "root",        // your MySQL username
  password: "TsepangMakhoana37",// your MySQL password
  database: "reactdb"  // your database name
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL!");
  }
});

module.exports = db;
