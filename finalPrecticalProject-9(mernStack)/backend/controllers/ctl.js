
const schema = require("../model/signupSchema")

module.exports.register  = async (req,res)=>{
      await schema.create(req.body).then(()=>{
        res.json({msg:"data added"})
      })
}