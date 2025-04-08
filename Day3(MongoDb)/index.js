const express =  require("express")
const port = 1008;

const app = express();
const db = require("./config/db")
const schema = require("./model/firstSchema")

app.set("view engine" , "ejs")
app.use(express.urlencoded({extended:true}))

app.get("/",async(req,res)=>{
    // let student = await schema.find({})
    // res.render("index",{student})
    
    await schema.find({}).then((student)=>{
        res.render("index",{student})
    })
})

app.post("/addData",async(req,res)=>{
    // let data = await schema.create(req.body)
    // res.redirect("/")

    await schema.create(req.body).then(()=>{
        res.redirect("/")
    })
})


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server started on port : " + port);
})