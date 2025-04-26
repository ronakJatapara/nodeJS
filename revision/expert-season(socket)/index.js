const { log } = require("console");
const express = require("express")
const port = 1008;

const app =express()
app.get("/",(req,res)=>{
    return res.sendFile(__dirname+"/home.html")
})


const http= require("http")
const  httpServer = http.createServer(app)

const {Server} = require("socket.io")
const io = new Server(httpServer)

io.on("connection",function(socket){
    console.log("new User connected");

    // socket.on("disconnect",function(){
    //     console.log("user discoonected");    
    // })

    // setTimeout(()=>{
    //     socket.send("hello , first msg passed")
    // },2000)

    // setInterval(()=>{
    //     let date = new Date()
    //     let time = date.getTime()
    //     socket.emit("myEvent",time)

    //     // why we take send cahnge with emit 

    //     // socket.emit("getData",time)

    // },2000)

    socket.on("userData",(msg)=>{
       console.log(msg);
       
    })
    
})


httpServer.listen(port,(Err)=>{
    // Err ? console.log(Err):console.log("httpServer created on port "+port);
    
    if(Err)
    {
        console.log(Err);
        return false;
        
    }
    console.log("httpServer created on port "+port);
})

