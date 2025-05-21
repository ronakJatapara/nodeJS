const mongoose = require("mongoose")

const schema = mongoose.Schema({
    catName:{
        type:String,
        required:true
    },
    catImage:{
        type:String,
        required:true
    }
})

const categorySchema = mongoose.model("category",schema)
module.exports = categorySchema
