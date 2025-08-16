const {createServer} = require("node:http")
const fs = require("node:fs")

const hostname = "localhost"
const port = 8080
const routes = {
    "/":"./index.html",
    "/about":"./about.html",
    "/contact-me":"./contact-me.html"
}

const server = createServer((req, res)=>{

    const reqPage = req.url
    let filePath = routes[reqPage] || "./404.html"

    fs.readFile(filePath, (err, data)=>{
        if(err){
            res.statusCode = 500
            res.setHeader("Content-Type", "text/plain")
            res.end("Error loading file")
        }else{
            res.statusCode = 200
            res.setHeader("Content-Type", "text/html")
            res.end(data)
        }
    })
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})