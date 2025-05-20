const express = require("express")
const port  = 1008
const path = require("path")

const app = express()
const db = require("./config/db")
const cookie = require("cookie-parser")
const passport = require("passport")
const session = require("express-session")
const connectFlash  = require("connect-flash")
const flash = require("./middleware/flash")

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))
app.use(cookie())

app.use(session({
    name:"ronak",
    secret:"rnw",
    resave:true,
    saveUninitialized:false,
    cookie:{maxAge:100*100*60} // for 10 minute
}))


app.use(passport.session())
app.use(passport.initialize())

app.use(connectFlash())
app.use(flash.setFlash)

app.use("/",require("./routes/route"))
app.use("/category",require("./routes/category"))
app.use("/subCategory",require("./routes/subCategory"))
app.use("/product",require("./routes/product"))


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port : "+port);
})
