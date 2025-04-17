const schema = require("../model/firstSchema")

module.exports.firstPage = async(req,res)=>{
   await schema.find({}).then((student)=>{
    res.render("index",{student})
   })
}

module.exports.add = async(req,res)=>{
    // console.log(req.body);
    await schema.create(req.body).then(()=>{
        res.redirect("/")
    })
}