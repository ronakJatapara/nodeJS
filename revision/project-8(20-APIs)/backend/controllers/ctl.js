
const schema = require("../model/firstSchema")

module.exports.addAdmin = async (req,res)=>{
   await schema.create(req.body).then(()=>{
    res.json({msg:"data added"})
   })    
} 