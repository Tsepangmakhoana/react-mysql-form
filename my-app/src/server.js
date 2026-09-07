const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // replace with your MySQL username
  password: "password", // replace with your MySQL password
  database: "school"    // database name
});

db.connect(err => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL!");
  }
});

// Route to handle form submission
app.post("/submit", (req, res) => {
  const { name, number, status } = req.body;
  db.query(
    "INSERT INTO students (name, number, status) VALUES (?, ?, ?)",
    [name, number, status],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving student");
      } else {
        res.send("Student saved successfully!");
      }
    }
  );
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
