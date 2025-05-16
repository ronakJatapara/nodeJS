const schema = require("../model/firstSchema")


module.exports.login = (req,res)=>{
    res.render("login")
}
module.exports.loginAdmin = (req,res)=>{
    res.redirect("/dashboard")
    // console.log(req.body);
    
}
module.exports.dashboard = (req,res)=>{
    res.render("dashboard")
}
module.exports.addAdmin = (req,res)=>{
    res.render("addAdmin")
}
module.exports.viewAdmin = async(req,res)=>{
    await schema.find({}).then((data)=>{
        res.render("viewAdmin",{data})
    })
}
module.exports.add = async(req,res)=>{

    req.body.image = req.file.path
   await schema.create(req.body).then(()=>{
    res.redirect("/addAdmin")
   })
    

}