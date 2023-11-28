const express = require("express");

const app = express();

// import peoeples page routes

const people = require("./routes/peoples");
const auth = require("./routes/auth");

app.use(express.static("./methods-public"));


// parse form data / url encoded data

app.use(express.urlencoded({ extends: false }));

app.use(express.json());


// routes
app.use("/api/people", people);
app.use("/login", auth)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}....`);
});
