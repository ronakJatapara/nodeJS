const schema = require("../model/firstSchema")
const fs = require("fs")


module.exports.dashboard = (req,res)=>{
    res.render("dashboard")
}
module.exports.addAdmin  =(req,res)=>{
    res.render("addAdmin")
}
module.exports.viewAdmin = async(req,res)=>{
      await schema.find({}).then((data)=>{
        res.render("viewAdmin",{data})
 })
}
module.exports.add = async (req,res)=>{
   
    req.body.image = req.file.path

    await schema.create(req.body).then(()=>{
        res.redirect("/addAdmin")
    })    
    
}
module.exports.delete = async (req,res)=>{
     let singleData = await schema.findById(req.query.id)
     fs.unlinkSync(singleData.image)

     await schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/viewAdmin")
     })
}
module.exports.edit = async(req,res)=>{
        await schema.findById(req.query.id).then((edit)=>{
            res.render("editAdmin",{edit})
        })
}
module.exports.update = async(req,res)=>{
    let updateData = await schema.findById(req.body.id)
    let img ;

    req.file ? img = req.file.path : img = updateData.image
    req.file && fs.unlinkSync(updateData.image)

    req.body.image = img

    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
           res.redirect("/viewAdmin")
    })
} 
module.exports.login = (req,res)=>{
    res.render("login")
}
module.exports.loginAdmin = (req,res)=>{
    res.redirect("/dashboard")
}
module.exports.logout = (req,res)=>{
    req.session.destroy()
    res.redirect("/")
}
module.exports.changePass = (req,res)=>{
    res.render("chengePass")
}
module.exports.changePassword = async(req,res)=>{
    let admin = req.user;
   
    if(admin.pass == req.body.oldPass)
    {
       if(req.body.oldPass != req.body.newPass)
       {
            if(req.body.newPass == req.body.confirmPass)
            {
                      await schema.findByIdAndUpdate(admin.id,{pass:req.body.newPass}).then(()=>{
                        res.redirect("/logout")
                      })
            }
            else{
             res.redirect("/changePass")
            }
       }
       else{
        res.redirect("/changePass")
       }
    }
    else{
        res.redirect("/changePass")
    }
}

module.exports.lostPass = (req,res)=>{
    console.log(req.body);
    
}