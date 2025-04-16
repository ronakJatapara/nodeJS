const schema = require("../model/firstSchema")

module.exports.firstPage = (req,res)=>{
    res.render("index")
}

module.exports.add = (req,res)=>{
    console.log(req.body);
    
}