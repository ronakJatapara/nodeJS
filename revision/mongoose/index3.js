const express = require("express");
const port = 4008;

const app = express();
const db = require("./config/db3")

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server connected on port :" + port);
    
    
})