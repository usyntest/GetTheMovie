const express = require("express");
const routes = require("./routes/routes");
const mysql = require("mysql");

const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "uday1601",
  database: "music_app",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("mysql connect");
});

app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static("public"));

routes(app);

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
