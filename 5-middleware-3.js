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
const authorize = require("./auth");

// setting up middleware function
// the parameters in the middleware come from the express

// in

// consuming the middleware we will pass it as an arguement below
// now instead of using the normal method of consuming the middleware by passing the function as a parimeter
// we will use .use() method to consume our middleware function
// the middleware should always be on the top
// we can also pass another parameter to the method below e.g the path
// passing the api path below will apply to both the product and item
// app.use("/api", setMiddleware);

// consuming more than one middleware functions
app.use([authorize, setMiddleware]);

app.get("/", (req, res) => {
  //   const method = req.method;
  //   const url = req.url;
  //   const time = new Date().getDay();
  //   console.log(method, url, time);
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/api/products", (req, res) => {
  res.send("<h1>Products</h1>");
});

app.get("/api/item", (req, res) => {
  console.log(req.user);
  res.send("<h1>Item</h1>");

});

app.get("*", (req, res) => {
  res.send("<h2>Page not found</h2>");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}....`);
});
