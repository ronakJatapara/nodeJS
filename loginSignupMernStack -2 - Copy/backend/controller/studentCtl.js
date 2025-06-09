
const studentSchema = require("../model/student")


module.exports.form = async(req,res)=>{
    
    await studentSchema.create(req.body).then((data)=>{
        res.json({msg:"added"})
    })
}

module.exports.viewData = async(req,res)=>{
    
    // await studentSchema.find({}).then((data)=>{
    //     res.json(data)
    // })
    console.log(req.body);
    

}