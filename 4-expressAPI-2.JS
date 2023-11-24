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

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Listening to port ${PORT}...`)
})