const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");

const port = process.env.PORT || 8080;
const server = express();

server.use(bodyParser.json());

const mainRoutes = require("./routes/index");
server.use("/", mainRoutes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    server.listen(port, () => {
      console.log(`Connected to DB and listening on ${port}`);
    });
  }
});