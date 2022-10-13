const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/signup.html"));
});

router.post("/", (req, res) => {
  const { name, username, email, password } = req.body;

  res.write(`<h1>${name}</h1>`);
  res.write(`<h1>${username}</h1>`);
  res.write(`<h1>${email}</h1>`);
  res.write(`<h1>${password}</h1>`);

  res.send();
});

module.exports = router;
