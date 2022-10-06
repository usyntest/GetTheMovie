const express = require("express");
const axios = require("axios");
const path = require("path");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;

const API_KEY = process.env.API_KEY;

const app = express();

app.use(express.urlencoded({ extended: true }));

const baseURL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL,
  params: {
    api_key: API_KEY,
  },
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/top_rated", (req, res) => {
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

// This api endpoint is to get a specific movie
app.get("/movie/:id", (req, res) => {
  instance
    .get(`/movie/${req.params.id}`)
    .then((response) => {
      let { data } = response;

      let img_path = "https://image.tmdb.org/t/p/w500";

      console.log(img_path + data.poster_path);

      res.send(
        `<img src=${img_path + data.poster_path} alt="${
          data.original_title
        }"><h1>${data.original_title}</h1><p>${data.overview}</p>`
      );
    })
    .catch((err) => {
      res.send("Error: " + err);
    });
});

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
