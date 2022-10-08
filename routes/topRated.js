// API Endpoint /top-rated to get Top Rated movies list

const express = require("express");

const instance = require("./instance");

const router = express.Router();

router.get("/", (req, res) => {
  // check if the value is not given/undefined/0
  let page = parseInt(req.query.page);
  if (isNaN(page)) {
    page = 1;
  }

  // Makes the request to MOVIES_DB
  instance
    .get("/movie/top_rated", {
      params: {
        page,
      },
    })
    .then((response) => {
      // gets the actual data from the request made
      let { results } = response.data;
      // res.send(data);

      // This line is here to add just the charset because if not added the names in other langauges
      // are not diplayed properly
      res.write("<head><meta charset='UTF-8'><title>Top-Rated</title></head>");

      // Looping over array of objects to get each movie
      for (let i = 0; i < results.length; i++) {
        let title = results[i]["original_title"];
        let link = results[i].id;
        res.write(`<h1>${title}</h1>`);
        res.write(
          `<a target=_blank href="/movie/${link}">${results[i].id}</a>`
        );
      }

      res.send();
    })
    .catch((err) => {
      res.send("Error: " + err);
    });
});

module.exports = router;
