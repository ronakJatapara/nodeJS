const mongoose  = require("mongoose")

const schema = mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    productPrice:{
        type:String,
        require:true
    },
    productImage:{
        type:String,
        require:true
    }
})

const firstSchema = mongoose.model("products",schema)
module.exports = firstSchema