const express = require("express")
const port = 2004;
const cors = require("cors")
const app = express()
const db = require("./config/db")
// const path = require("path")
app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use(express.json())
// app.use(express.static(path.join(__dirname,"public")))

app.use("/",require("./routes/route"))
app.listen(port,(err)=>{
   err ? console.log(err) : console.log("server created on port "+ port);
    
    
})