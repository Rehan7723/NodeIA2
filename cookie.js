const express=require('express')
const Cookie=require('cookie-parser')
const app=express()
app.use(Cookie())

app.get('/setcookie',(req,res)=>{
    res.cookie("name","value")
    res.cookie('mca','class')
    res.cookie('bca','lab')
    res.status(200).send("Cookies set")
})



app.get('/getcookie',(req,res)=>{
    res.status(201).send(req.cookies)
})




app.listen(4000,console.log('Listening to the port')
)