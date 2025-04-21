const express = require("express")

const router = express.Router();

const ctl = require("../controller/ctl")

router.get("/",ctl.dashboard)
router.get("/addAdmin",ctl.addAdmin)

module.exports = router