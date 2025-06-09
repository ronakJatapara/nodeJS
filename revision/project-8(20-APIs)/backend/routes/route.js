const express  = require("express")

const router = express.Router()
const ctl = require("../controllers/ctl")

// router.get("/",ctl.dashboard)
router.post("/addAdmin",ctl.addAdmin)


module.exports = router