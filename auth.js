const authorize = (req, res, next) => {
  console.log("Authorize working");
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(401).send("<h1>Unauthorized</h1>");
  }
  //   next();
};

module.exports = authorize;
