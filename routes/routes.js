const index = require("./index");
const topRated = require("./topRated");
const movie = require("./movie");
const login = require("./login")
const signup = require("./signup")

function routes(app) {
  app.use("/", index);
  app.use("/login", login)
  app.use("/signup", signup)
  app.use("/top_rated", topRated);
  app.use("/movie", movie);
}

module.exports = routes;
