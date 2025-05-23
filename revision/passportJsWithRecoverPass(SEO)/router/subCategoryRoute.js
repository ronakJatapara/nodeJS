const express = require("express")
const router = express.Router();

const ctl = require("../controller/subCategoryCtl")

router.get("/addSubcategory",ctl.addSubcategory)
router.get("/viewSubCategory",ctl.viewSubCategory)
router.post("/addSubCategory",ctl.addSubCategory)

module.exports = router
