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
    bookPrice:{
        type:String,
        require:true
    }
})


const firstSchema = mongoose.model("book",schema)

module.exports = firstSchema