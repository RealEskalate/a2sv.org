/* eslint-disable no-undef */
require('express-async-errors')
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require('./startup/routes')
require("./startup/db.js");

process.on('unhandledRejection', (ex) => {
  throw ex
})
const bodyParser = require("body-parser");
const compression = require("compression");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(compression({ filter: shouldCompress }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(router)

// Centralizing error handling to avoid try catch blocks on the controllers
app.use((err, req, res, next) => {
  res.status(500).send('server error ' + err.toString())
  next(err)
})

app.listen(port, () => {
  console.log("Server is running... at port " + port);
});

function shouldCompress(req, res) {
  return compression.filter(req, res);
}

module.exports = app;
