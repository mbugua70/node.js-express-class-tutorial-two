const express = require("express");
const router = express.Router();
const loginAuth = require("../controller/auth");
let { people } = require("../data");

router.post("/", loginAuth);

module.exports = router;
