const express = require("express")
const port = 2008;


const app = express();
const db = require("./config/db")

app.listen(port , (err)=>{
    err ? console.log(err) : console.log("Server created on port : " + port);
})











// const mongoose = require("mongoose")


// mongoose.connect("mongodb://127.0.0.1/myData")


// const db  =mongoose.connection;

// db.once("open",(err)=>{
//     err ? console.log(err) : console.log("database connected !");
    
    
// })

// module.exports = db




// const express =  require("express")
// const port = 1008;

// const app = express();
// const db = require("./config/db")

// app.listen(port,(err)=>{
//     err ? console.log(err) : console.log("Server started on port : " + port);
// })