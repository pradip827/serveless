require("dotenv");
const mongoose = require("mongoose");

exports.connect = () => {
  // Connecting to the database
  //const localhost1="127.0.0.1"
  mongoose
    .connect("mongodb://127.0.0.1:27017/Users")
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. ");
      console.error(error);
      process.exit(1);
    });
};
