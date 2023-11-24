const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./index.html')
const aboutPage = readFileSync('./about.html')
const pageNoFound = readFileSync('./pageNotFound.html')

// style
const homeStyle = readFileSync('./style.css')
// nav
const homeNav  = readFileSync('./navBar/browse-app.js')
// logo

const homeLogo = readFileSync('./logo.svg')


const server  = http.createServer((req, res) =>{
    const url = req.url
    if(url === "/"){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(aboutPage)
        res.end()
    }
    // styling
    else if(url === '/style.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyle)
        res.end()
    }
    // nav
    else if(url === '/navBar/browse-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeNav)
        res.end()
    }
    // logo
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeLogo)
        res.end()
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(pageNoFound)
        res.end()
    }
})


server.listen(5000)