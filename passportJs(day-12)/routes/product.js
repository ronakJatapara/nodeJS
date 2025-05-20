const express = require("express")
const router = express.Router()

const ctl =  require("../controller/productCtl")
const multer  = require("../middleware/catMulter")
const passport =  require("../middleware/passportSt")
// const multer = require("multer")

router.get("/addProduct",ctl.addProduct)
router.get("/viewProduct",ctl.viewProduct)
router.post("/addProduct",multer.single("productImage"),ctl.addProducts)

module.exports = router