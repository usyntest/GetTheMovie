const express = require("express");
const db = require("../database");

const router = express.Router();

router.post("/", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  db.query(
    `SELECT * FROM users WHERE email='${email}';`,
    (error, results, fields) => {
      if (error) {
        res.json({ message: `${error}` });
        return;
      }

      if (results.length === 0) {
        res.json({ message: "email not found" });
        return;
      } else {
        db.query(
          `SELECT * FROM users
          WHERE email='${email}' AND password='${password}' LIMIT 1;`,
          (error, results2) => {
            if (error) {
              res.json({ message: `${error}` });
              return;
            }
            if (results2.length === 0) {
              res.json({ message: "password is incorrect" });
              return;
            } else {
              res.json({message: "user found", results2});
              return;
            }
          }
        );
      }
    }
  );
});

module.exports = router;
