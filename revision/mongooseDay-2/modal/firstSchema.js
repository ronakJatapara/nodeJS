const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    age:{
      type:String,
      require:true
    }
})

const firstSchema =  mongoose.model("student",schema)
module.exports = firstSchema