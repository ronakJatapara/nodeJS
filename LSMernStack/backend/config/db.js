
const mongoose = require("mongoose")

// mongoose.connect("mongodb://127.0.0.1/MernAuth")

// const db = mongoose.connection

// db.once("open",(err)=>{
//     err ? console.log(err) : console.log("db connected");
// })

mongoose.connect("mongodb+srv://ronak16:ronak@cluster0.t5qz8dm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("db connected");
    
})

module.exports = mongoose
