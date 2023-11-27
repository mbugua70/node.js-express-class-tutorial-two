const setMiddleware = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getDay();
  console.log(method, url, time);
  //   you can terminate the middleware by sending back the respond to the user as shown below
  //   res.send("Testing");

  //   passing the middleware to the next middleware function
  next();
};

// we will export our middleware function

module.exports = setMiddleware;
