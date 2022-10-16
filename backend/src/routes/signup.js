const express = require("express");
const db = require("../database.js");

const router = express.Router();

router.post("/", (req, res) => {
  const { name, username, email, password } = req.body;

  db.query(
    `SELECT email, username FROM users
  WHERE username='${username}' OR email='${email}' LIMIT 1;`,
    (error, results) => {
      if (error) {
        res.json({ message: `${error}` });
        return;
      }

      if (results.length === 0) {
        db.query(
          `INSERT INTO users (name, username, email, password) 
        VALUES ('${name}', '${username}', '${email}', '${password}')`,
          (error, results) => {
            if (error) {
              res.json({ message: `${error}` });
              return;
            }
            res.json({ message: "account successfully created" });
            return;
          }
        );
      } else {
        if (username === results[0].username) {
          res.json({ message: "username already exists" });
          return;
        } else {
          res.json({ message: "account with this email already exists" });
          return;
        }
      }
    }
  );
});

module.exports = router;
