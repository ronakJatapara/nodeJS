const express = require("express");

const router = express.Router();
const ctl = require("../controller/ctl")

router.get("/",ctl.firstPage)
router.post("/addData",ctl.add)
router.get("/deleteData",ctl.delete)
router.get("/editData",ctl.edit)
router.post("/updateData",ctl.update)

module.exports = router