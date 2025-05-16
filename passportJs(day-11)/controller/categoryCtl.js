const schema = require("../model/catSchema")

module.exports.addCat =async(req,res)=>{
   
        res.render("addCat")
   
}
module.exports.viewCat = async (req,res)=>{
       await schema.find({}).then((data)=>{
        res.render("viewCat",{data})
       })
}
module.exports.addCategory = async(req,res)=>{
    
     req.body.catImage = req.file.path

   await schema.create(req.body).then(()=>{
    res.redirect("/category/addCat")
   })




    
}