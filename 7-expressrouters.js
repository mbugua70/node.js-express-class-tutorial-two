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
app.use("/login", auth);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}....`);
});

// Router - A router object is an isolated instance of middleware and routes
//  - You can think of it as a “mini-application,” capable only of performing middleware and routing functions.
// top-level express object has a Router() method that creates a new router object.

// invoked for any requests passed to this router
// router.use(function (req, res, next) {
//   .. some logic here .. like any other middleware
//   next()
// })

// will handle any request that ends in /events
// depends on where the router is "use()'d"
// router.get('/events', function (req, res, next) {

// })
// You can then use a router for a particular root URL in this way separating your routes into files or even mini-apps.

// only requests to /calendar/* will be sent to our "router"
// app.use('/calendar', router)
