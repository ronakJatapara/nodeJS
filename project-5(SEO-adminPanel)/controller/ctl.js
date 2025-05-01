    const schema = require("../model/firstSchema")
    const fs = require("fs")



    module.exports.login=(req,res)=>{
        res.render("login")
    }
    module.exports.loginAdmin= async (req,res)=>{
        let admin = await schema.findOne({email:req.body.email})
        if(!admin)
        {
            return res.redirect("/")
        }
    if(admin.pass == req.body.pass)
    {
        res.cookie("admin",admin)
        res.redirect("/dashboard")
    }
    else{
        res.redirect("/")
    }
    }



    module.exports.dashboard=(req,res)=>{
        if(req.cookies.admin)
            {
             res.render("dashboard")
         
            }
            else{
             res.redirect("/")
            }      
    }
   
    module.exports.logout=(req,res)=>{
        res.clearCookie("admin");
        res.redirect("/")
    }

    module.exports.addAdmin=(req,res)=>{
        res.render("addAdmin")
    }
    module.exports.viewAdmin =  async(req,res)=>{
      
        await schema.find({}).then((data)=>{
            res.render("viewAdmin",{data})
        })
    }

    module.exports.add = async (req,res)=>{
    
        req.body.image = req.file.path
        await schema.create(req.body).then(()=>{
            res.redirect("/viewAdmin")
        })
        

    }

    module.exports.delete = async(req,res)=>{
        let deleteImage = await schema.findById(req.query.id)
        fs.unlinkSync(deleteImage.image)
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
        let updateImage = await schema.findById(req.body.id)
        let img = "";

        req.file ? img = req.file.path : img = updateImage.image
        req.file && fs.unlinkSync(updateImage.image)

        req.body.image = img
        await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
            res.redirect("/")
        })
    }
        

