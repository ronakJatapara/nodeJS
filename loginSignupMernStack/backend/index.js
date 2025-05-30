const express = require("express")

const port = 2004;
const db = require("./config/db")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port " + port); 
})