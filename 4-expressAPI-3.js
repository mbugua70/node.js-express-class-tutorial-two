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

app.get('/api/products/1', (req,res) =>{
    const singleProducts = products.find((product) => product.id === 1)
    res.json(singleProducts)
})

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Listening to port ${PORT}...`)
})