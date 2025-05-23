const  express = require("express")
const router = express.Router()
const ctl = require("../controller/productCtl")
const multer = require("../middleware/multer")

router.get("/addProduct",ctl.addProduct)
router.get("/viewProduct",ctl.viewProduct)
router.post("/addProduct",multer.single("ProductImage"),ctl.addProductRecord)


module.exports = router
// ProductImage