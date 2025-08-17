const express = require("express")
const app = express()


app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/public/about.html")
})

app.get("/contact-me", (req, res)=>{
    res.sendFile(__dirname + "/public/contact-me.html")
})
const PORT = 3000

app.use((req, res) =>{
    res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(PORT, (error)=>{
    if(error){
        throw error
    }
    console.log(`Server is running at http://localhost:${PORT}`)
})