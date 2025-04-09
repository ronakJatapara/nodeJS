
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/myData2")

const db = mongoose.connection


db.once("open",(err)=>{
    err ? console.log(err) : console.log("server connected");
    
})


module.exports = db