// middleware with express.js
// this are function that exercute during the request to the server.
//"express app are nothing but bunch of middleware functions stuffed together to make one nice express cake"

// req = middleware = res
// middleware seats between the req and res
// when you work with middleware you must pass it to the middleware

const express = require("express");

const app = express();

// importing the middleware function

const setMiddleware = require("./setMiddleware");

// setting up middleware function
// the parameters in the middleware come from the express

// consuming the middleware we will pass it as an arguement below

app.get("/", setMiddleware, (req, res) => {
  //   const method = req.method;
  //   const url = req.url;
  //   const time = new Date().getDay();
  //   console.log(method, url, time);
  res.send("<h1>Home Page</h1>");
});

app.get("/about", setMiddleware, (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("*", (req, res) => {
  res.send("<h2>Page not found</h2>");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}....`);
});
