const express = require("express")
const port = 1008;
const app = express();
const path = require("path")

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
const db = require("./config/db")
const schema =  require("./model/firstSchema")

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

app.post("/addBook",async(req,res)=>{ 
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
  
    await schema.findById((req.query.id)).then((data)=>{
      res.render("editForm",{data})
    })
  
})

app.post("/updateBook",async(req,res)=>{
  
   await schema.findByIdAndUpdate(req.body.id,req.body).then(()=>{
    res.redirect("/")
   })
  
})





app.listen(port,(err)=>{
    err ? console.log(err) :  console.log("server started on port :"+port);
})
