const express = require("express")

const router = express.Router()
const ctl = require("../controller/ctl")
const multer  =require("../middleware/multer")

router.get("/",ctl.dashboard)
router.get("/addAdmin",ctl.addAdmin)
router.get("/viewAdmin",ctl.viewAdmin)
router.post("/addAdmin",ctl.add)



module.exports = router