const index = require("./index");
const topRated = require("./topRated");
const movie = require("./movie");

function routes(app) {
  app.use("/", index);
  app.use("/top_rated", topRated);
  app.use("/movie", movie);
}

module.exports = routes;
