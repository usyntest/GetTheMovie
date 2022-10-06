const express = require("express");
const routes = require("./routes/routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
