const express  = require("express")

const router = express.Router()
const ctl = require("../controller/ctl")
const multer = require("../middleware/multer")
const passportSt = require("../middleware/passport")
 
router.get("/",ctl.login)
router.post("/loginAdmin",passportSt.authenticate("local",{failureRedirect:"/"}),ctl.loginAdmin)
router.get("/dashboard",ctl.dashboard)
router.get("/addAdmin",ctl.addAdmin)
router.get("/viewAdmin",ctl.viewAdmin)
router.post("/addAdmin",multer,ctl.add)
router.get("/deleteData",ctl.delete)
router.get("/editData",ctl.edit)
router.post("/updateAdmin",multer,ctl.update)

module.exports = router