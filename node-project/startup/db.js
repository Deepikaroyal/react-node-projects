const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://127.0.0.1/vidly", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => winston.info("Successfully connected..."));
    //  .catch((err) => console.log("Connection failes", err));
};
