const express = require("express");

let { people } = require("./data");
const app = express();

// setting up static middleware

app.use(express.static("./methods-public"));

// parse form data / url encoded data

app.use(express.urlencoded({ extends: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ successful: true, data: people });
});

// learning about the http method post

// parse data

app.use(express.json());

app.post("/api/people", (req, res) => {
  // we use the status of 201 it sending data request was successful
  // res.status(201).send("john doe")
  console.log(req.body);
  const { name } = req.body;

  if (!name) {
    console.log("test one");
    res.status(400).json({ success: false, msg: "please provide your name" });
  }

  res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (name) {
    res.status(200).send(`You are welcome ${name}`);
  } else {
    res.status(401).send("you are not authorized");
  }
});

const PORT = 5000;

app.listen(5000, () => {
  console.log(`Listening to port ${PORT}...`);
});
