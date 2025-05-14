const schema = require("../model/catSchema")

module.exports.addCat =async(req,res)=>{
   
        res.render("addCat")
   
}
module.exports.addCategory = async(req,res)=>{
    
     req.body.catImage = req.file.path
     
   await schema.create(req.body).then(()=>{
    res.redirect("/category/addCat")
   })




    
}