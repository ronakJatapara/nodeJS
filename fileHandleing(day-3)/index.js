const express = require("express")
const port = 1008;
const app = express();
// const path = require("path")

const db = require("./config/db")
const schema =  require("./model/firstSchema")
const multer  =  require("./middleware/multer")
const path = require("path");
const upload = require("./middleware/multer");
const fs = require("fs")


app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))


app.get("/", async (req, res) => { 
    await schema.find({}).then((books)=>{
      res.render("navbar",{books})
    })
});

app.get("/addForm",async(req,res)=>{
    await schema.find({}).then((books)=>{
      res.render("addForm",{books})
    })
})

app.post("/addBook",multer,async(req,res)=>{ 
  req.body.image = req.file.path
  await schema.create(req.body).then(()=>{
    res.redirect("/")
  })  
})

app.get("/deleteData",async(req,res)=>{
  let singgleData = await schema.findById(req.query.id)
  fs.unlinkSync(singgleData.image)
  
  await schema.findByIdAndDelete(req.query.id).then(()=>{
    res.redirect("/")
  })
})

app.get("/editData",async(req,res)=>{
  
    await schema.findById((req.query.id)).then((data)=>{
      res.render("editForm",{data})
    })
  
})

app.post("/updateBook",multer,async(req,res)=>{
  
 let updateImage = await schema.findById(req.body.id);
 let img = ""
 
 req.file ? img = req.file.path : img = updateImage.image
 req.file && fs.unlinkSync(updateImage.image)

 req.body.image = img

 
 await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
  res.redirect("/")
 })
  
})





app.listen(port,(err)=>{
    err ? console.log(err) :  console.log("server started on port :"+port);
})
