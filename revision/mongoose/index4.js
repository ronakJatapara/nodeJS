
const express = require("express");
const port = 5008;

const app = express();
const db = require("./config/db4")

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server created on port : " + port);
   
})


