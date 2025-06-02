const express =  require("express")
const port =  2004

const app =  express()
const db = require("./config/db")
const cors = require('cors')
app.use(express.urlencoded({extended:true}))

app.use(cors())

app.use(express.json())

app.use("/",require("./route/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server strated on port"+port);
   
})