
const schema = require("../model/addData")

module.exports.addData = async(req,res)=>{
 await schema.create(req.body).then(()=>{
    res.status(200).json({msg:"data added" })
 })    

 module.exports.getData = async(req,res)=>{
   
await schema.find({}).then((data)=>{
   res.json({msg:"All data is here",data})
})
   
   
 }

    
}