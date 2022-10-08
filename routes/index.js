// API Endpoint to get the homepage

const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/index.html"));
});

module.exports = router;
