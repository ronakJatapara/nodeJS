const schema = require("../model/productSchema")
const subCatSchema = require("../model/subCatSchema")

module.exports.addProduct =async(req,res)=>{
   
        await subCatSchema.find({}).then((data)=>{
                res.render("addProduct",{data})
        })
   
}
module.exports.viewProduct = async (req,res)=>{

}
module.exports.addProducts = async(req,res)=>{
   
    console.log(req.file);
    console.log(req.body);

    

}