const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/adminpanel3")

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log(err) : console.log("database connect");
})


module.exports = db;
