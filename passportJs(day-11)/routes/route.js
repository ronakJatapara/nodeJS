const express = require("express")

const router = express.Router();

const ctl = require("../controller/ctl")
const upload = require("../middleware/multer")
const passportSt = require("../middleware/passportSt")


router.get("/",ctl.login)
router.post("/login",passportSt.authenticate("local",{failureRedirect:"/"}),ctl.loginAdmin)
router.get("/logout",ctl.logout)
router.get("/dashboard",passportSt.checkAuth,ctl.dashboard)
router.get("/profile",passportSt.checkAuth,ctl.profile)
router.get("/changePass",passportSt.checkAuth,ctl.changePass)
router.post("/changePass",ctl.changePassword)
router.post("/lostPass",ctl.lostPass)
router.post("/verifyPass",ctl.verifyPassWord)




router.get("/addAdmin",ctl.addAdmin)
router.post("/addAdmin",upload,ctl.add)
router.get("/viewAdmin",ctl.viewAdmin)
router.get("/deleteData",ctl.delete)
router.get("/editdata",ctl.edit)
router.post("/updateAdmin",upload,ctl.update)



module.exports = router