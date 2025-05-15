const schema = require("../model/catSchema")

module.exports.addSubCat =async(req,res)=>{
   
        res.render("addSubCat")
   
}
module.exports.viewSubCat = async (req,res)=>{
       await schema.find({}).then((data)=>{
        res.render("viewSubCat",{data})
       })
}
module.exports.addSubCategory = async(req,res)=>{
    
     req.body.catImage = req.file.path
     
   await schema.create(req.body).then(()=>{
    res.redirect("/subCategory/addCat")
   })




    
}