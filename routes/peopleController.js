const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controller/people");

router.get("/", getPeople);

// learning about the http method post

// parse data

router.post("/", createPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

module.exports = router;
