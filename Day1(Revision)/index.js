// const express = require("express");
// const port = 1008;

// const app = express();

// app.set("view engine","ejs")


// app.get("/",(req,res)=>{
//    res.render("index")
// })



// app.listen(port,(err)=>{
//     err ? console.log(err) : console.log("server started on port " +  port);  

// })


const express  = require("express")
const port = 1007;

const app = express()

app.set("view engine", "ejs")


let students = [
    {id:1,name:"ronak", subject:"node"}
]


app.get("/",(req,res)=>{
    // res.write("<h1>port start on 1007</h1>")
    // res.end()

    res.render("index2",{students})
})


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("port startded on port :  " + port)
})