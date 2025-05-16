const express = require("express")
const router = express.Router()

const ctl =  require("../controller/subCategoryctl")
const passport =  require("../middleware/passportSt")

router.get("/addSubCat",ctl.addSubCat)
router.get("/viewSubCat",ctl.viewSubCat)
router.post("/addSubCat",ctl.addSubCategory)

module.exports = router