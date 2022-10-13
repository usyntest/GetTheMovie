const express = require("express");

const index = require("./src/routes");
const topRated = require("./src/routes/topRated");
const movie = require("./src/routes/movie");
const login = require("./src/routes/login");
const signup = require("./src/routes/signup");
const error = require("./src/routes/error");

const router = express.Router();

router.use("/", index);
router.use("/login", login);
router.use("/signup", signup);
router.use("/top_rated", topRated);
router.use("/movie", movie);
router.use("*", error);

module.exports = router;
