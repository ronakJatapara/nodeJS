const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gerne:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    }
})


const movieSchema = mongoose.model("data",schema)
module.exports = movieSchema