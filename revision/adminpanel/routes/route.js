const express = require("express")

const router = express.Router()
const ctl = require("../controller/ctl")
const multer = require("../middleware/multer")

router.get("/",ctl.dashboard)
router.get("/addAdmin",ctl.addAdmin)
router.post("/addAdmin",multer,ctl.add)
router.get("/deleteData",ctl.delete)
router.get("/editData",multer,ctl.edit)

router.get("/viewAdmin",ctl.viewAdmin)


module.exports = router