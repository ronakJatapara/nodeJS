const express = require("express")
const router = express.Router()
const ctl = require("../controllers/ctl")
const movieCtl = require("../controllers/movieCtl")

router.post("/register",ctl.register)

// movie data //

router.post("/addData",movieCtl.addData)
router.get("/getData",movieCtl.getData)



module.exports = router
