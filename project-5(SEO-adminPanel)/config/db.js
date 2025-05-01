const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1/Project5AdminPanel")

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log(err) : console.log("database connected");
})

module.exports = db