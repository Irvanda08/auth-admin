const express = require("express");
const bodyParser = require("body-parser");
const ticketRoutes = require("./dataRoutes");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("", ticketRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
