const fs=require('fs')
const http=require('http')

// const txt="Well hello there guys "
// fs.appendFile("test.txt",txt,(err)=>{
//     if(err)
//         console.log(err);
//     else
//     console.log("Appended");
    
        
// })

// fs.readFile("test.txt",(err,data)=>{
//     if(err)
//         console.log(err);
//     else
//     console.log(data.toString());
    
        
// })

const data=fs.readFileSync('test.txt')
console.log(data.toString())
// fs.open('test.txt','r+',(err,fd)=>{
//     if(err)
//         console.log(err);
//     else
//     console.log(fd.toString());
    
        
// })

// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-Type':'text/html'})
//     fs.readFile('test.txt',(err,data)=>{
//         res.write(data.toString())
//         res.end()
//     })
// }).listen(4000,console.log('listening to the port'))

console.log("Completed")

