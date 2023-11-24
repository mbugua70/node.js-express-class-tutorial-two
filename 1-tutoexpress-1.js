const http = require('http')

const server = http.createServer((req, res) =>{
console.log("john doe")
// request object

console.log(req.method)
res.writeHead(200, {'content-type':'text/html'})
res.write('<h1>john doe</h1>')
res.end()
})

server.listen(5000, console.log("Port 5000 showing....."))


// fullstack developer /
// learning node.js
//