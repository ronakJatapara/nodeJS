
const mongoose = require("mongoose")

const schema = mongoose.Schema({
   productName:{
        type:String,
        required:true
    },
        productPrice:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    subCategoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subCategory", 
        required:true
    }
})

const proSchema = mongoose.model("productId",schema)

module.exports = proSchema