const mongoose =require("mongoose")
const { type } = require("node:os")

const schema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})


const firstSchema  = mongoose.model("admin",schema)
module.exports = firstSchema