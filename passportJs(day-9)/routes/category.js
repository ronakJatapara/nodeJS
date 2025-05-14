const express = require("express")
const router = express.Router()

const ctl =  require("../controller/categoryCtl")
const multer = require("../middleware/catMulter")
const passport =  require("../middleware/passportSt")

router.get("/addCat",ctl.addCat)
router.post("/addCat",multer,ctl.addCategory)

module.exports = router