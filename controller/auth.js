const loginAuth = (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (name) {
    res.status(200).send(`You are welcome ${name}`);
  } else {
    res.status(401).send("you are not authorized");
  }
};

module.exports = loginAuth;
