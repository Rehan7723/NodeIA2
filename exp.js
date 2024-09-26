const express=require('express')
const morgan=require('morgan')
const app=express()


app.use(morgan('dev'))
app.use(express.json())


const obj=[
    {
        id:123,
        name:"abc",
        usn: '1234'
    },
    {
        id:1234,
        name:'xyz',
        usn:" adsadf"
    }
]

app.get('/api/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const rs=obj.find(e=>e.id===id)
    if(rs)
        res.send(rs)
    else
    res.status(400)
})


app.listen(4000,()=>{
    console.log("listening to 4000 port");
})