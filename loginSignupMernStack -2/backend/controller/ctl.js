
const schema  = require("../model/firstSchema")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports.register = async(req,res)=>{
 
    let admin = await schema.findOne({email:req.body.email})
    if(admin)
    {
        return res.status(200).json({msg:"User already exits"})
    } 
    req.body.pass = await bcrypt.hash(req.body.pass,10)

    await schema.create(req.body).then((data)=>{
       return res.status(200).json({msg:"data added successfully",admin:data})
    })
    
}
module.exports.login = async (req,res)=>{
   
    let admin = await schema.findOne({email : req.body.email})
    
    if(!admin)
    {
        return res.status(200).json({msg:"Admin not found ",code:100})
    }

//  if(await bcrypt.compare(req.body.password,admin.password)){
//     const token = jwt.sign({admin},"rnw",{expiresIn : "1h"})
//     return res.status(200).json({ msg: "Admin Logged In Successfully !", code: 200,token : token });
//   }else{
//     return res.status(200).json({ msg: "Admin password is wrong !", code: 102 });
//   }
     if(await bcrypt.compare(req.body.pass,admin.pass))
     {
        const token = jwt.sign({admin},"rnw",{expiresIn:"1h"})
        return res.status(200).json({msg:"user login successfully !",code:200,token:token})
     }
     else{
        return res.status(200).json({msg:"Admin password is wrong",code :102})
     }
    
    
}

module.exports.allAdmin = async(req,res)=>{
    await schema.find({}).then((data)=>{
        return res.status(200).json({msg:"all data is here!",data:data})

    })
}