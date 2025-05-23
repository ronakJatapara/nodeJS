// const { Schema } = require("mongoose")
const categorySchema = require("../model/catSchema")

module.exports.addCat = (req,res)=>{
    res.render("addCat")
}
module.exports.viewCategoty = async(req,res)=>{
  await categorySchema.find({}).then((data)=>{
    res.render("viewcategory",{data})
  })
}
module.exports.addCategory = async(req,res)=>{

    req.body.catImage = req.file.path

    await categorySchema.create(req.body).then(()=>{
        res.redirect("/category/addCat")
    })
    
}
