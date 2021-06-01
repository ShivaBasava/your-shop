const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080;

var dbconnection = require('./db')

app.get("/", (req, res) => {
    res.send("Hello!!!!!!!")
});



app.listen(8080, () =>{
    console.log(`Backend Server started @PORT: ${PORT}`)
});

