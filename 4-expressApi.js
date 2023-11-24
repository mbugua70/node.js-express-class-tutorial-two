// express api

const express = require('express')

// importing data
const {products} = require('./data')
const app = express();

app.get('/', (req, res) =>{
    // res.json([{name:"john", id:"33434343"}, {name:"susan",id:"343435343"}])
    // instead of hardcoding we will do the following

    res.json(products)
    // the content type for the  code is the application/json


})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`)
})