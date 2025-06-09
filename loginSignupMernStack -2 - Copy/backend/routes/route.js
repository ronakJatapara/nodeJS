const express = require("express")
const router = express.Router();
const ctl = require("../controller/ctl")
const stuCtl = require("../controller/studentCtl")


router.post("/register",ctl.register)
router.post("/login",ctl.login)
router.post("/form",stuCtl.form)
router.get("/viewData",stuCtl.viewData)



module.exports = router