const express = require("express")

const router = express.Router()
const ctl = require("../controller/studentCtl")

router.post("/form",ctl.form)

module.exports = router