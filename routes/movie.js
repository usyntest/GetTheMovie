// API endpoint to get the movie

const express = require("express");

const instance = require("./instance");
const imageFilePath = require("./constants/posterImgPath");
const { posterSizes, backdropSizes } = require("./constants/imgSizes");

const router = express.Router();

router.get("/:id/:posterSize?/:backdropSize?", (req, res) => {
  // Check whether the sizes sent are valid or not

  let { posterSize, backdropSize } = req.params;
  console.log(posterSize + "             " + backdropSize);
  if (posterSize && backdropSize) {
    if (
      posterSizes.includes(posterSize) &&
      backdropSizes.includes(backdropSize)
    ) {
    } else {
      res.status(404).json({ message: "Invalid Size Parameter" });
      return;
    }
  } else {
    backdropSize = backdropSize ? backdropSize : "original";
    posterSize = posterSize ? posterSize : "original";
  }

  // Request for Details to TMBD API

  instance
    .get(`/movie/${req.params.id}`)
    .then((response) => {
      let { data } = response;

      res.status(200).json({
        message: "Movie Found",
        details: {
          id: data.id,
          originalMovieName: data.original_title,
          movieName: data.title,
          movieDescription: data.overview,
          moviePoster: imageFilePath + posterSize + data.poster_path,
          backdrop: imageFilePath + backdropSize + data.backdrop_path,
          realeaseDate: data.releasedate,
          runtime: data.runtime,
          genres: data.genres,
          status: data.status,
          tagline: data.tagline,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({ messgae: err });
    });
});

module.exports = router;
