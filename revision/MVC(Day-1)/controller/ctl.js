const schema = require("../model/firstSchema")

module.exports.firstPage =async(req,res)=>{
   await schema.find({}).then((student)=>{
    // req.body.id =  student.length+1
    res.render("index",{student}) 
   })
}
module.exports.add = async(req,res)=>{
//    console.log(req.body);
 await schema.create(req.body).then(()=>{
    res.redirect("/")
 })
   
}

module.exports.delete = async(req,res)=>{
    await schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/")
    })
}

module.exports.edit=async(req,res)=>{
    await schema.findById(req.query.id).then((data)=>{
        res.render("edit",{data})
    })    
}
module.exports.update=async(req,res)=>{
    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/")
    })
}