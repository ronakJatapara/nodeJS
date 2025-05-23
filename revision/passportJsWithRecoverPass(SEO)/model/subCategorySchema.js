const mongoose = require("mongoose")

const schema = mongoose.Schema({
    subCategoryName:{
        type:String,
        required:true
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true
    }
})

const subCategorySchema = mongoose.model("subCategory",schema)
module.exports = subCategorySchema
