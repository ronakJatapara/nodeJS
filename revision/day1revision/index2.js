const express = require("express")
const port = 8008;
const path = require("path")

const app = express()
 
  app.set("view engine" , "ejs")
 app.use(express.urlencoded({extended:true}))

 app.use(express.static(path.join(__dirname,"public")));
//  app.use(express.urlencoded({extended:true}))
 
let students = [
    {
        id:1,
        name:"ronak",
        subject:"node"
    }
]

app.get("/",(req,res)=>{
    res.render("index2",{ students })
})

app.post("/addData",(req,res)=>{
    req.body.id = students.length +1
    students.push(req.body)
    res.redirect("/")
})
app.get("/deleteData",(req,res)=>{  
    let newData = students.filter((item)=> item.id !=req.query.id)
    students = newData;
    res.redirect("/")
})


app.get("/editData/:id",(req,res)=>{
   let singleData = students.find((item)=>item.id == req.params.id)
   res.render("edit2",{singleData})
})

app.post("/updateData",(req,res)=>{
  students.forEach((item)=>{
    if(item.id == req.body.id){
        item.name = req.body.name
        item.subject = req.body.subject
    }else{
        item
    }
  })  
  res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) :  console.log("server started on port number :" + port);

})