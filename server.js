const express = require("express");
const axios = require("axios");
const path = require("path");
const { response } = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;

const API_KEY = process.env.API_KEY;

const app = express();

app.use(express.urlencoded({ extended: true }));

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
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
        page: page,
      },
    })
    .then((response) => {
      let names = "";

      // gets the actual data from the request made
      let data = response.data.results;
      // res.send(data);

      for (let i = 0; i < data.length; i++) {
        let title = data[i]["original_title"];
        names += `<h1>${title}</h1>`;
      }

      res.send(names);
    })
    .catch((err) => {
      res.send("Error" + err);
    });
});

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
