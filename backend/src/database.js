const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "uday1601",
  database: "get_the_movie",
});

db.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connection established at " + db.threadId);
});

module.exports = db;
