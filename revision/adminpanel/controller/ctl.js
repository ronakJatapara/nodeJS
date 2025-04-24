const schema = require("../model/firstSchema")
const fs = require("fs")


module.exports.dashboard = (req,res)=>{
    res.render("dashboard")
}
module.exports.addAdmin= (req,res)=>{
    res.render("addAdmin")
}
module.exports.add= async(req,res)=>{
   req.body.image = req.file.path
   await schema.create(req.body).then(()=>{
    res.redirect("/addAdmin")
   })  
}
module.exports.delete = async(req,res)=>{
  let singleData = await schema.findById(req.query.id)
  fs.unlinkSync(singleData.image)

  await schema.findByIdAndDelete(req.query.id).then(()=>{
      res.redirect("/viewAdmin")
  })
}
module.exports.edit=async(req,res)=>{
    // console.log(req.query);
 await schema.findById(req.query.id).then((data)=>{
    res.render("editAdmin",{data})
 })
    
}





module.exports.viewAdmin=async(req,res)=>{
    await schema.find({}).then((admin)=>{
        res.render("viewAdmin",{admin})
    })
}