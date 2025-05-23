let subCategorySchema = require("../model/subCategorySchema")
let categorySchema = require("../model/catSchema")

module.exports.addSubcategory = async(req,res)=>{
    await categorySchema.find({}).then((data)=>{
        res.render("addSubCategory",{data})
    })
}
module.exports.viewSubCategory = async (req,res)=>{
    await subCategorySchema.find({}).populate("categoryId").then((data)=>{
        res.render("viewSubcategory",{data})
    })
}
module.exports.addSubCategory = async(req,res)=>{
    
    await subCategorySchema.create(req.body).then(()=>{
        res.redirect("/subCategory/addSubCategory")
    })
    
    
}