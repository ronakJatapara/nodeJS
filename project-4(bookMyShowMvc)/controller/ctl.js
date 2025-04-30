
const { log } = require("console")
const schema = require("../model/firstSchema")
const fs = require("fs")

module.exports.home = async(req,res)=>{
   await schema.find({}).then((data)=>{
    res.render("home",{data})
   })
}
module.exports.addMovie = async(req,res)=>{
    await schema.find({}).then((data)=>{
        res.render("addMovie",{data})
    })
}

module.exports.add= async(req,res)=>{ 
    req.body.image = req.file.path

    await schema.create(req.body).then(()=>{
         res.redirect("/")
    })
   
}
module.exports.delete =async(req,res)=>{
    const singleImage = await schema.findById(req.query.id)
    fs.unlinkSync(singleImage.image)
       
    await schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/")
    })
}
module.exports.edit= async(req,res)=>{
  
    await schema.findById(req.query.id).then((edit)=>{
      res.render("editMovie",{edit})
    })
    
}
module.exports.update=async(req,res)=>{
  
   let updateImage = await schema.findById(req.body.id)
   let img = " ";

   req.file ? img = req.file.path : img = updateImage.image;
   req.file && fs.unlinkSync(updateImage.image)

   req.body.image = img

    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/")
    })

    
}