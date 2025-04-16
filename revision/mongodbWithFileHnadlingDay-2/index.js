const express = require("express")
const port = 2008;
const app = express();
const path = require("path")

const db = require("./config/db")
const schema = require("./model/firstSchema")
const upload = require("./middleware/multer")
const fs = require("fs")
// const multer = re 

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.get("/",async(req,res)=>{
    await schema.find({}).then((data)=>{
        res.render("home",{data})
    })
})

app.get("/addForm",async(req,res)=>{
    await schema.find({}).then((data)=>{
        res.render("addForm",{data})
    })
})
app.post("/addDetails",upload,async(req,res)=>{
    req.body.Image = req.file.path
    
    await schema.create(req.body).then(()=>{
        res.redirect("/")
    })    
})

app.get("/deleteData",async(req,res)=>{
    let uploadData = await schema.findById(req.query.id);
    fs.unlinkSync(uploadData.Image)

   await schema.findByIdAndDelete(req.query.id).then(()=>{
    res.redirect("/")
   })
})
app.get("/editData",async(req,res)=>{
   
    await schema.findById(req.query.id).then((singleData)=>{
       res.render("editForm",{singleData})
    })
    
})
app.post("/updateDetails",async(req,res)=>{
    // await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
    //     res.redirect("/")
    // })  
      
})





app.listen(port,(err)=>{
    err ? console.log(err):console.log("server started on port "+port );   
})