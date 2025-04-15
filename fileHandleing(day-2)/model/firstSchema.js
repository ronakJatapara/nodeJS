
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    bookName:{
        type:String,
        require:true
    },
    authorName:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    image : {
        type:String,
        required : true
    }
})

const firstSchema = mongoose.model("books",schema)
module.exports = firstSchema