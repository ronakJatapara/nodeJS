

// const mongoose = require("./")
const schema = require("../model/firstSchema")

module.exports.dashboard = (req,res)=>{
    res.render("dashboard")
}
module.exports.addAdmin = (req,res)=>{
    res.render("addAdmin")
}
module.exports.add = async(req,res)=>{
    await schema.create(req.body).then(()=>{
        res.redirect("/")
    })
    
}
module.exports.viewAdmin = async(req,res)=>{
    await schema.find({}).then((admin)=>{
        res.render("viewAdmin",{admin})
    })
    // res.render("viewAdmin")
}