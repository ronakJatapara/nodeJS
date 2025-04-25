const express = require("express")

const router = express.Router()
const ctl = require("../controller/ctl")
const multer = require("../middleware/multer")

router.get("/",ctl.login)
router.post("/login",ctl.loginAdmin)
router.get("/logout",ctl.logout)
router.get("/dashboard",ctl.dashboard)

router.get("/addAdmin",ctl.addAdmin)
router.post("/addAdmin",multer,ctl.add)
router.get("/deleteData",ctl.delete)
router.get("/editData",ctl.edit)
router.post("/updateAdmin",multer,ctl.update)
router.get("/viewAdmin",ctl.viewAdmin)


module.exports = router