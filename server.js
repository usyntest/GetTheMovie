const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3000;

const app = express();

var url =
  "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";

axios
  .get(url)
  .then((res) => {
    let metaData = res.data["Meta Data"];
    console.log(metaData);
  })
  .catch((err) => {
    console.log(err);
  });

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
