const express = require("express")

const router = express.Router()
const ctl = require("../controller/ctl")
const multer  = require("../middleware/multer")

router.get("/",ctl.home)
router.get("/addMovie",ctl.addMovie)
router.post("/addMovie",multer,ctl.add)
router.get("/deleteData",ctl.delete)
router.get("/editData",ctl.edit)
router.post("/updateMovie",multer,ctl.update)


module.exports = router