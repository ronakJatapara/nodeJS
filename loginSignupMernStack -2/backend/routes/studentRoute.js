const express = require("express")

const router = express.Router()
const ctl = require("../controller/studentCtl")

router.ctl("/addData",ctl.addData)

module.exports = router