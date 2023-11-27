// query string parameter / url parameter

// express api and params
const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((items) => {
    const { id, name, image } = items;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:paramId", (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { paramId } = req.params;
  // we have Number which can be used to convert the string to number
  const singleProducts = products.find(
    (product) => product.id === Number(paramId)
  );
  if (!singleProducts) {
    return res.status(404).send("<h1>Page not found</h1>");
  }
  res.json(singleProducts);
});

app.get("/api/products/:paramId/reviews/:reviewsId", (req, res) => {
  console.log(req.params);
  res.send("<h1>Testing the params functionality</h1>");
});

// QUERY

app.get("/api/vi/query", (req, res) => {
  console.log(req.query);
  //    res.send("<h1>Hello world</h1>")
  console.log("Hello world");
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  //    if the user searched and didnt find any product we can go with if statement
  if (sortedProducts.length < 1) {
    // res.status(200).send("<h1>Opps no product you are searching for  was found </h1>")
    // we will return the status of 200 to show that yes the search was successful but data was not found
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
  res.send("hello world");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
