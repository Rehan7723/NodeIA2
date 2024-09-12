// const http=require('http')

// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write(req.url)
//     res.end()
// }).listen(4000)

const express=require('express')
const app=express()

 app.get('/things/:name/:id',(req,res)=>{
    res.send("Id: "+req.params.id+"  Name: "+req.params.name)
})

var server=app.listen(4000,()=>{
    var host=server.address().address
    var port=server.address().port
    console.log('The url is: http:// %s:%s',host,port);
    
})