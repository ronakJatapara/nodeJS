// const { model } = require("mongoose")
const schema = require("../model/firstSchema")


module.exports.dashboard=(req,res)=>{
    res.render("dashboard")
}
module.exports.addAdmin=(req,res)=>{
    res.render("addAdmin")
}
module.exports.viewAdmin=async(req,res)=>{
    await schema.find({}).then((data)=>{
        res.render("viewAdmin",{data})
    })
}
module.exports.add= async(req,res)=>{
      await schema.create(req.body).then(()=>{
        res.redirect("/viewAdmin")
      })
  

    
}