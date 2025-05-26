const schema = require("../model/firstSchema")

module.exports.addData = async (req,res)=>{
   await schema.create(req.body).then(()=>{
    res.json({msg:"data added"})
   })
}

module.exports.viewData = async (req,res)=>{
    await schema.find({}).then((data)=>{
        res.json(data)
    })
}
