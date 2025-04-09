const express = require("express")
const port = 7008

const app = express();
const db = require("./config/db");
const schema =  require("./modal/firstSchema")

app.set("view engine" , "ejs")
app.use(express.urlencoded({extended:true}))


app.get("/",async(req,res)=>{
    
    await schema.find({}).then((student)=>{
        res.render("index",{student})
    })

})

app.post("/addData",async(req,res)=>{
    
    await schema.create(req.body).then(()=>{
        res.redirect("/")
    })

})


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port " + port);  
})





