const express = require("express");

let { people } = require("./data");
const app = express();

// setting up static middleware

app.use(express.static("./methods-public"));

app.get("/api/people", (req, res) => {
  res.status(200).json({ successful: true, data: people });
});

// learning about the http method post

const PORT = 5000;

app.listen(5000, () => {
  console.log(`Listening to port ${PORT}...`);
});
