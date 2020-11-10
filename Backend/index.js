require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require('./startup/routes')
const mongoose = require("./startup/db.js");

const bodyParser = require("body-parser");
const compression = require("compression");
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.use(router)
app.use(cors());
app.use(compression({ filter: shouldCompress }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(port, () => {
  console.log("Server is running... at port " + port);
});

function shouldCompress(req, res) {
  return compression.filter(req, res);
}

module.exports = app;
