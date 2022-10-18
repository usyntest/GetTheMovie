const express = require("express");
const routes = require("./src/routes/home");
const db = require("./src/database");
const cors = require("cors");

const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use("/public", express.static("public"));

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
