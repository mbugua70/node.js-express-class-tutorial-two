const express = require('express')

const app = express()

// home page
app.get('/', (req, res) =>{
  res.status(200).send('<h1>Home page</h1>')
})

// about page

app.get('/about', (req, res)=>{
 res.status(200).send('<h1>About page</h1>')
})


// page not found
// we will use the .all() - this one covers all the http method

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
})
app.listen(5000, () =>{
    console.log("Listening to port 50000.....")
})



// http method with express js

// app.get
// app.put
// app.post
// app.delete
// app.use
// app.listen
// app.all


// express syntax

// app.method/httpmethod(path, handler)