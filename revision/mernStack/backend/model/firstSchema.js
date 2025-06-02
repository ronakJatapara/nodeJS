const mongoose = require("mongoose")

const  schema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Age:{
        type:String,
        required:true
    }
})

const firstSchema = mongoose.model("admin",schema)
module.exports = firstSchema