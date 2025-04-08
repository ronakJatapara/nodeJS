const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    subject:{
        type: String,
        require:true
    }
})

const firstSchema = mongoose.model("student",schema)

module.exports =  firstSchema;