const schema = require("../model/firstSchema")
const upload = require("../middleware/multer")
const fs = require("fs")


module.exports.login=(req,res)=>{
   res.render("login")
}
module.exports.loginAdmin=async(req,res)=>{
  res.redirect("/dashboard")
}
module.exports.dashboard = (req,res)=>{
  
    res.render("dashboard")

 
}
module.exports.logout=(req,res)=>{
    req.session.destroy()
    res.redirect("/")
}
module.exports.profile=(req,res)=>{
    res.render("profile")
}

module.exports.addAdmin = (req,res)=>{
    res.render("addAdmin")
}
module.exports.add = async(req,res)=>{
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
module.exports.edit = async(req,res)=>{
    // console.log(req.body);
    
    await schema.findById(req.query.id).then((data)=>{
        res.render("editAdmin",{data})
    })
    
}
module.exports.update = async(req,res)=>{

    let updateImage = await schema.findById(req.body.id)
    let img = " "

    req.file ? img = req.file.path : img = updateImage.image
    req.file && fs.unlinkSync(updateImage.image)

    req.body.image = img

    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/viewAdmin")
    })
    
    
}



module.exports.viewAdmin = async(req,res)=>{
    await schema.find({}).then((admin)=>{
        res.render("viewAdmin",{admin})
    })
}