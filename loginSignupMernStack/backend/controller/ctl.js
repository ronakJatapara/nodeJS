
const schema  = require("../model/firstSchema")
const bcrypt = require("bcryptjs")

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
