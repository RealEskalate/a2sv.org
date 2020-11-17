/* eslint-disable no-undef */
const mongoose = require("mongoose");
require("dotenv").config();
require("../index");
var connectionString = "";
if (process.env.NODE_ENV === "test") {
  connectionString = process.env.APP_DB_CONNECTION_TEST;
} else {
  connectionString = process.env.APP_DB_CONNECTION;
}
mongoose.connect(
  connectionString,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  function (err) {
    if (err) {
      console.log("Error connecting to database. " + err);
    } else {
      console.log(
        "Connected to Database! " + process.env.NODE_ENV + " via " + connectionString);
    }
  }
);
