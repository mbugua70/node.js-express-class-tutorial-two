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

// put method

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id, name)
  // res.send("john doe")
  const person = people.find((person) => person.id === Number(id));
  // console.log(person)

  if (!person) {
    res
      .status(404)
      .json({
        success: false,
        msg: `The user with the id of ${id} can't be found`,
      });
  }
  const newPerson = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPerson });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res
      .status(404)
      .json({
        success: false,
        msg: `We can't find the user with the id of ${id}`,
      });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));
  console.log(newPeople);
  res.status(200).json({ success: true, data: newPeople });
});
const PORT = 5000;

app.listen(5000, () => {
  console.log(`Listening to port ${PORT}...`);
});
