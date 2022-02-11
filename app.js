const express = require("express");
const app = express();
require("dotenv");

require("./Config/dbConfig");

app.use(express.json({ limit: "50mb", extended: true }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

var server = require("http").createServer(app);

var port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Hey there! welcome to the JWT Login service!!" });
});

const loginapi = require("./Router/loginRouter");
app.use("/api/v1/user/", loginapi);

/* const auth=require("./MiddleWare/authLogin")

app.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  }); */

const produtRouters = require("./Router/productRouter");
app.use("/api/v1/product", produtRouters);

server.listen(port);
console.log("App running on :>> ", port);
module.exports = app;
