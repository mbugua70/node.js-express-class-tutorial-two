let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ successful: true, data: people });
};

const createPerson = (req, res) => {
  // we use the status of 201 it sending data request was successful
  // res.status(201).send("john doe")

  const { name } = req.body;

  if (!name) {
    console.log("test one");
    res.status(400).json({ success: false, msg: "please provide your name" });
  }

  res.status(201).json({ success: true, person: name });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id, name)
  // res.send("john doe")
  const person = people.find((person) => person.id === Number(id));
  // console.log(person)

  if (!person) {
    res.status(404).json({
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
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res.status(404).json({
      success: false,
      msg: `We can't find the user with the id of ${id}`,
    });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));
  console.log(newPeople);
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
};
