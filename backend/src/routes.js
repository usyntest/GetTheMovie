const express = require("express");

const home = require("./routes/home");
const topRated = require("./routes/topRated");
const movie = require("./routes/movie");
const login = require("./routes/login");
const createAccount = require("./routes/createAccount");
const error = require("./routes/error");

const router = express.Router();

router.use("/", home);
router.use("/login", login);
router.use("/createAccount", createAccount);
router.use("/top_rated", topRated);
router.use("/movie", movie);
router.use("*", error);

module.exports = router;
