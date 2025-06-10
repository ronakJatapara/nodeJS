
const mongoose =  require("mongoose")

const schema =  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gerne:{
        type:String,
        required:true
    }
})

const firstSchema = mongoose.model("data",schema)
module.exports = firstSchema


