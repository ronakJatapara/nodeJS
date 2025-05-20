const express  = require("express")

const router = express.Router()
const ctl = require("../controller/ctl")
const multer =  require("../middleware/multer")
const passport  = require("../middleware/passport")

router.get("/",ctl.login)
router.post("/loginAdmin",passport.authenticate("local",{failureRedirect:"/"}),ctl.loginAdmin)
router.get("/logout",ctl.logout)
router.get("/changePass",ctl.changePass)
router.post("/changePassword",ctl.changePassword)
router.post("/lostPass",ctl.lostPass)
router.get("/dashboard",passport.checkAuth,ctl.dashboard)
router.get("/addAdmin",passport.checkAuth,ctl.addAdmin)
router.get("/viewAdmin",passport.checkAuth,ctl.viewAdmin)
router.post("/addAdmin",multer,ctl.add)
router.get("/deleteData",ctl.delete)
router.get("/editData",ctl.edit)
router.post("/updateAdmin",multer,ctl.update)


module.exports = router