const express = require("express")
const router = express.Router()
const ctl = require("../controllers/ctl")

router.post("/register",ctl.register)

module.exports = router
