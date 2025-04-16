const express = require("express")
const port  = 1008;

const app =  express();
const db = require("./config/cd")
const path  =  require("path")
const schema = require("./model/firstSchema")
const multer = require("./middleware/multer");
const fs = require("fs")

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

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
app.post("/addForm",multer,async(req,res)=>{

    req.body.productImage = req.file.path

     await schema.create(req.body).then(()=>{
        res.redirect("/")
     }) 
})

app.get("/deleteData",async(req,res)=>{
    let deleteImage  = await schema.findById(req.query.id)
    fs.unlinkSync(deleteImage.productImage)
   await schema.findByIdAndDelete(req.query.id).then(()=>{
    res.redirect("/")
   })
})
app.get("/editData",async(req,res)=>{
    await schema.findById(req.query.id).then((data)=>{
        res.render("editForm",{data})
    })
    
})
app.post("/updateForm",multer,async(req,res)=>{

    let updateImage = await schema.findById(req.body.id)
    let img = ""

    req.file ? img = req.file.path : img = updateImage.productImage
    req.file && fs.unlinkSync(updateImage.productImage)

    req.body.productImage = img 

    await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
        res.redirect("/")
    })

})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port number "+port);
})