
const express = require("express")
const port  = 1008;
const app = express();
const path = require("path")

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

const db = require("./config/db");
const schema =  require("./model/schema");
const multer = require("./middleware/multer");
const upload = require("./middleware/multer")

app.get("/",async(req,res)=>{
   await schema.find({}).then((products)=>{
    res.render("home",{products})
   })
})
app.get("/addForm",async(req,res)=>{
    await schema.find({}).then((products)=>{
        res.render("addForm",{products})
    })
    
})
app.post("/addStudents",multer,async(req,res)=>{
    req.body.image = req.file.path
   await schema.create(req.body).then(()=>{
       res.redirect("/")
   })
})

app.get("/deleteData",async(req,res)=>{
    await schema.findByIdAndDelete(req.query.id).then(()=>{
        res.redirect("/")
    })
})
app.get("/editData",async(req,res)=>{
    await schema.findById(req.query.id).then((data)=>{
        res.render("editForm",{data})
    })
})
app.post("/updateStudents",async(req,res)=>{
    // await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
    //     res.redirect("/")
    // })
  await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
    res.redirect("/")

  })
    
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port :"+port);
})
