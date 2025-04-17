const express = require("express")


const router = express.Router();
const ctl = require("../controller/ctl")
const db = require("../config/db")

router.get("/",ctl.firstPage)
router.post("/addData",ctl.add)

module.exports = router     