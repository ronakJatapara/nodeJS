const express = require("express")

const router = express.Router()
const ctl = require("../controller/ctl")
const multer = require("../middleware/multer")
const passport = require("../middleware/passport")

router.get("/",ctl.login)
router.post("/loginAdmin",passport.authenticate("local", {failureRedirect: "/"}),ctl.loginAdmin)
router.get("/logout",ctl.logout)
router.get("/changePass",passport.checkAuth,ctl.changePass)
router.post("/changePassword",ctl.changePassword)
router.get("/profile",ctl.profile)
router.get("/lostPassEmail",ctl.lostPassEmail)
router.get("/lostPass",ctl.lostPass)
router.post("/lostPass",ctl.lostPassword)
router.post("/varifyPassWord",ctl.varifyPassWord)


router.get("/dashboard",passport.checkAuth,ctl.dashboard)
router.get("/addAdmin",passport.checkAuth,ctl.addAdmin)
router.get("/viewAdmin",passport.checkAuth,ctl.viewAdmin)
router.post("/addAdmin",multer.single("image"),ctl.add)
router.get("/deleteData",ctl.delete)
router.get("/editData",passport.checkAuth,ctl.edit)
router.post("/updateAdmin",multer.single("image"),ctl.update)

module.exports = router