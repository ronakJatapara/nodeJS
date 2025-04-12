
const mongoose =  require("mongoose")

const schema =  mongoose.Schema({
    studentName:{
        type:String,
        require:true
    },
    studentAge:{
        type:String,
        require:true
    },
    studentStd:{
        type:String,
        require:true
    },
    studentMarks:{
        type:String,
        require:true
    },
    studentImage:{
        type:String,
        require:true
    }
})

const firstSchema =  mongoose.model("products",schema)
module.exports = firstSchema