const express = require("express")

const router = express.Router()
const ctl = require("../controller/ctl")

router.get("/",ctl.home)
router.get("/addForm",ctl.addForm)
router.post("/addForm",ctl.add)
router.get("/deleteData",ctl.delete)
router.get("/editData",ctl.edit)
router.post("/updateForm",ctl.update)

module.exports = router