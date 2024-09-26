const http =require('http')


http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write('hello')
    res.end()
}).listen(4000,()=>{
    console.log("listening to port 4000")
})