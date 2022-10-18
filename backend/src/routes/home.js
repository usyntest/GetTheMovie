/*
API Endpoint to get the homepage of the frontend
This API endpoint gets all its data from the TMBD API's different lists like popular movies, top_rated tv, etc.
And sends it to the frontend to build the front-page
*/

const express = require("express");
const instance = require("../instance");

const router = express.Router();

router.get("/", async (req, res) => {
  let data = await getData([
    { name: "Carousel Data", url: "/movie/now_playing" },
    {
      name: "Popular Movies",
      url: "/movie/popular",
    },
    { name: "Latest Movies", url: "/movie/latest" },
    { name: "Top Rated Movies", url: "/movie/top_rated" },
    { name: "Popular TV", url: "/tv/popular" },
    { name: "Latest TV", url: "/tv/latest" },
    { name: "Top Rated TV", url: "/tv/top_rated" },
  ]);
  res.json(data);
});

async function getData(arr) {
  let returnData = [];
  for (let i = 0; i < arr.length; i++) {
    let data = await instance.get(arr[i].url).then((res) => {
      return res.data.results;
    });
    if (arr[i].name === "Carousel Data") {
      data = data.slice(0, 6);
    }
    returnData.push({ category: arr[i].name, results: data });
  }
  return returnData;
}

module.exports = router;
