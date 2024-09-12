const fs=require('fs')

var readstream=fs.createReadStream('test.txt')

readstream.on('data',(data)=>{
    console.log(data.toString());
    
})

var writestream=fs.createWriteStream('test.txt')

writestream.write("XWell hello there guys Well hello there guys Well hello there guys Well hello there guys Well hello there guys ")


