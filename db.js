const mongoose = require("mongoose")

//----- mongodb - mern-ecomm, ecomm
// var dburl = "mongodb://rootlocalhost:27017/mern-ecomm"
var dburl = "mongodb://auser:pwd@localhost:27017/ecommmm"


mongoose.connect(dburl, {useUnifiedTopology:true, useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error', () =>{
    console.log("Mongo DB Connection Failed")
})

dbconnect.on('open', () => {
    console.log("Mongo DB Connection Established Successfully")
})

module.exports = mongoose