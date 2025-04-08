const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1//myData");

const db = mongoose.connection

db.once("open",()=>{
    console.log("server connected");
    
})


module.exports = db