const schema = require("../model/firstSchema")

 
module.exports.home = async(req,res)=>{
    await schema.find({}).then((book)=>{
        res.render("home",{book})
    })
}
module.exports.addForm = async(req,res)=>{
    // await Schema
    await schema.find({}).then((book)=>{
        res.render("addForm",{book})
    })
}

module.exports.add=async(req,res)=>{
    await schema.create(req.body).then(()=>{
        res.redirect("/")
    })       
}

module.exports.delete=async(req,res)=>{
    await schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/")
    })    
}
module.exports.edit = async(req,res)=>{
    await schema.findById(req.query.id).then((data)=>{
        res.render("editForm",{data})
    })
}
module.exports.update =  async(req,res)=>{
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/")
    })
}