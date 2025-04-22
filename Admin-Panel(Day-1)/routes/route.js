const express = require("express")

const router = express.Router();

const ctl = require("../controller/ctl")

router.get("/",ctl.dashboard)
router.get("/addAdmin",ctl.addAdmin)
router.post("/addAdmin",ctl.add)
router.get("/viewAdmin",ctl.viewAdmin)

module.exports = router