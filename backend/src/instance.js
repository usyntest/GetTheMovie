const axios = require("axios");
const { config } = require("dotenv").config();

const API_KEY = process.env.API_KEY;
const baseURL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL,
  params: {
    api_key: API_KEY,
  },
});

module.exports = instance;
