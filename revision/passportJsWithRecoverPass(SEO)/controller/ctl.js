const { log } = require("console")
const schema = require("../model/firstSchema")
const fs = require("fs")
const mailer = require("../middleware/mailer")

module.exports.login = (req,res)=>{
    res.render("login")
}
module.exports.loginAdmin = async (req,res)=>{
    res.redirect("/dashboard")    
    // console.log(req.body);
    
}
module.exports.logout = async(req,res)=>{
    req.session.destroy()
    res.redirect("/") 
}
module.exports.changePass = async(req,res)=>{
    res.render("changePass")
}
module.exports.changePassword = async(req,res)=>{
    let admin = req.user
    
    console.log(admin.pass);
    
    
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
module.exports.profile = (req,res)=>{
    res.render("profile")
}

module.exports.lostPassEmail = async(req,res)=>{
    res.render("lostPassEmail")
}
module.exports.lostPass = (req,res)=>{
    res.render("lostPass")
}
module.exports.lostPassword = async (req,res)=>{
    
    let admin = await schema.findOne({email:req.body.email})
    if(!admin)
    {
        res.redirect("/")
    }
   let otp = Math.floor(Math.random()*100000+900000)
    mailer.sendOtp(req.body.email,otp)
    req.session.otp = otp
    req.session.adminData = admin

    res.render("lostPass")
    
}
module.exports.varifyPassWord = async(req,res)=>{
    let otp = req.session.otp;
    let admin = req.session.adminData

    if(req.body.otp == otp)
    {
          if(req.body.newPass == req.body.confirmPass)
            {
                let adminData  = await schema.findByIdAndUpdate(admin._id,{ pass: req.body.newPass,})
                   adminData && res.redirect("/logout");
            }   
            else{
                console.log("new password and confirm password must be same");
            } 
    }
    else{
        res.redirect("/")
    }
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
module.exports.delete = async(req,res)=>{
    let singleImage = await schema.findById(req.query.id)
    fs.unlinkSync(singleImage.image)

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
