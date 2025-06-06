const express = require("express")
const port = 1008;
const path  = require("path")

const app = express()
const db  = require("./config/db")
const session = require("express-session")
const passport = require("passport")

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.use(session({
    name:"ronak",
    secret:"jatapara",
    resave:true,
    saveUninitialized:false,
    cookie:{maxAge:100*100*60}
}))
app.use(passport.session())
app.use(passport.initialize())

app.use("/",require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port "+port);
})