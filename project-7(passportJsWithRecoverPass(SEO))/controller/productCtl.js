
const productSchema = require("../model/productSchema")
const subCategorySchema = require("../model/subCategorySchema")


module.exports.addProduct = async (req,res)=>{
   await subCategorySchema.find({}).then((data)=>{
    res.render("addProduct",{data})
   })
}
module.exports.viewProduct = async(req,res)=>{
   await productSchema.find({}).populate({
      path:"subCategoryId",
      populate:{
         path:"categoryId"
      }
   }).then((data)=>{
      res.render("viewProduct",{data})
   })
}
module.exports.addProductRecord = async(req,res)=>{
   
      req.body.ProductImage = req.file.path
   
    await productSchema.create(req.body).then(()=>{
        res.redirect("/product/addProduct")
    })
   // console.log(req.body);
   
    
}