const express = require("express")
const ctl = require("../controller/ctl")

const router =  express.Router()

router.post("/addData",ctl.addData)
router.get("/viewData",ctl.viewData)


module.exports = router