const http = require("http");
const port = 2002;


const portHandler = (req,res)=>{
    res.write("<h1>server start on port: 1919</h1>")
    res.end()
}

const server = http.createServer(portHandler);

server.listen(port,(err)=>{
    err ? console.log(err) : console.log("serveer start on port : " + port);
    
    
})

