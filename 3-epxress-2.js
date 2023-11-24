const express = require('express')
const path = require('path')

const app = express()

// code for not found files such as .css .png .svg .js
// app.use() - is used to setup the middleware
// static() - contain a file the server doesnt have to change
app.use(express.static('./public'))

// home page

// app.get('/', (req,res) => {
//     // sendFile() - method from express
//     res.sendFile(path.resolve(__dirname, './index.html'))
// })

// instead of the method above where we use sendFile method to render our html file
// we can use the two method provided to render our html file
//  1. moving the html file the static assests files as root directory file
//  2. SSR


// setting up the server
const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT} .....`)
})