const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    std:{
        type:String,
        required:true
    }
})

const studentSchema = mongoose.model("student",schema)
module.exports = studentSchema