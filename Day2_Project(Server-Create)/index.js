const http = require("http")
const port = 9009;


const portHandler = (req,res)=>{
    res.write("<h1>serveer start on 9009</h1>")
    res.end();
}


const server = http.createServer(portHandler);

server.listen(port,(err)=>{
    err ? console.log(err) : console.log("server start on port :" + port);
    
    
})


