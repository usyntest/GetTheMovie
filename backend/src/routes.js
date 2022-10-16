const express = require("express");

const index = require("./routes/index");
const topRated = require("./routes/topRated");
const movie = require("./routes/movie");
const login = require("./routes/login");
const signup = require("./routes/signup");
const error = require("./routes/error");

const router = express.Router();

router.use("/", index);
router.use("/login", login);
router.use("/signup", signup);
router.use("/top_rated", topRated);
router.use("/movie", movie);
router.use("*", error);

module.exports = router;
