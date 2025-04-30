const mongoose = require("mongoose")

const schema  = mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    }
})


const firstSchema  =  mongoose.model("movie",schema)
module.exports = firstSchema
