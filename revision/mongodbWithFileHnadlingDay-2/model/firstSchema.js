const mongoose = require("mongoose");

const schema = mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Image:{
        type:String,
        require:true
    }

})

const firstSchema = mongoose.model("data",schema);
module.exports = firstSchema