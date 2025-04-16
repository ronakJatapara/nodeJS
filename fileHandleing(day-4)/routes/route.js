const express = require("express")


const router = express.Router();
const ctl = require("../controller/ctl")

router.get("/",ctl.firstPage)
router.post("/addData",ctl.add)

module.exports = router