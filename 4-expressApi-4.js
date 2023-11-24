// express api and params
const express = require('express')
const {products} = require('./data')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})


app.get('/api/products', (req,res) =>{
    const newProducts = products.map((items) =>{
        const {id, name, image} = items
        return{id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:paramId', (req,res) =>{
    // console.log(req)
    // console.log(req.params)
    const {paramId} = req.params
    // we have Number which can be used to convert the string to number
    const singleProducts = products.find((product) => product.id === Number(paramId))
    if(!singleProducts){
        return res.status(404).send("<h1>Page not found</h1>");
    }
    res.json(singleProducts)
})

app.get('/api/products/:paramId/reviews/:reviewsId', (req,res) =>{
    console.log(req.params)
    res.send("<h1>Testing the params functionality</h1>")
})

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Listening to port ${PORT}...`)
})