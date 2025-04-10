const express =  require("express")
const port = 2008;

const app = express()

app.set("view engine" , "ejs")
app.use(express.urlencoded({extended:true}))

let students = [
    {
        id:1,
        name:"ronak",
        age:21
    }
]

app.get("/",(req,res)=>{
    res.render("index",{students})
})

app.post("/addData",(req,res)=>{
    req.body.id =  students.length+1
    students.push(req.body)
    res.redirect("/")   
})

app.get("/deleteData",(req,res)=>{
    
    let data = students.filter((item)=> item.id != req.query.id)
    students = data
    res.redirect("/")
    
})

app.get("/editData/:id",(req,res)=>{
    
    let singleDatas =  students.find((item)=> item.id == req.params.id)
    res.render("editForm",{singleDatas})
    
})

app.post("/updateData",(req,res)=>{
    // console.log(req.body);
    students.forEach((item)=>{
        if(item.id == req.body.id)
        {
            item.name =  req.body.name
            item.age =  req.body.body
        }
        else{
            item
        }
    })
    res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port  : "+port);
})
