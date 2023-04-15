// if (require("dotenv").config().error) throw ".env file is missing";

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.writeHead(200, { ContentType: "test/html" });
  console.log("Someone Connected");

  res.write("<html><body><p>This is the home route.</p></body></html>");
  res.end();
});

app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist");
});

app.listen(5001, "localhost", () => {
  console.log("Listening on port 5001");
});
