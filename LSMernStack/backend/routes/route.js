const express = require("express")
const route  = express.Router()
const ctl = require("../controllers/ctl")
const auth = require("../middleware/auth")

route.post("/register",ctl.register)
route.post("/logIn",ctl.logIn)
route.get("/allAdmin",auth,ctl.allAdmin)


module.exports  = route