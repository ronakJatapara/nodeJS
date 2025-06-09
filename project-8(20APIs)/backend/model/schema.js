const  mongoose = require("mongoose")

const schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role: {
    type: String,
    enum: ["admin", "manager", "employee"],
    default: "admin"
  }
})

const firstSchema = mongoose.model("20API",schema)

module.exports = firstSchema