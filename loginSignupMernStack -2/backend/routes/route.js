const express = require("express")
const router = express.Router();
const ctl = require("../controller/ctl")

router.post("/register",ctl.register)
router.post("/login",ctl.login)


module.exports = router