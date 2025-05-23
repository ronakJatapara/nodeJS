const express = require("express")
const router = express.Router();

const ctl = require("../controller/categoryCtl")
const multer = require("../middleware/multer")

router.get("/addCat",ctl.addCat)
router.post("/addCategory",multer.single("catImage"),ctl.addCategory)
router.get("/viewCategory",ctl.viewCategoty)


module.exports = router