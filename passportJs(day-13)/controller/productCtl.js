const schema = require("../model/productSchema")
const subCatSchema = require("../model/subCatSchema")

module.exports.addProduct =async(req,res)=>{
   
        await subCatSchema.find({}).then((data)=>{
                res.render("addProduct",{data})
        })
   
}
module.exports.viewProduct = async (req,res)=>{
   await schema.find({}).populate({
     path:"subCategoryId",
     populate:{
        path:"categoryId"
     }
   })
   .then((data)=>{
      res.render("viewProduct",{data})
   })
}
module.exports.addProducts = async(req,res)=>{
        req.body.productImage = req.file.path
   
    await schema.create(req.body).then(()=>{
        res.redirect("/product/addProduct")
    })

    

}