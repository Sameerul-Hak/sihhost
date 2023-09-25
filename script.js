const express=require("express");
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser = require('body-parser');
const app=express()
app.use(bodyParser.json());
app.use(express.json())

app.get("/home",(req,res)=>{
    res.json({ message: 'Comment added'});
})


app.listen(3001,()=>{
    console.log(`server listening on ${3001}`)
})