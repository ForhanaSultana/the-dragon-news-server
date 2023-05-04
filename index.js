const express = require('express')
const categories = require('./data/categories.json')
const cors = require("cors");

const app=express()
const port = process.env.PORT ||5000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('dragon is running')

})

app.listen(port,()=>{
    console.log(`dragon is running on port: ${port} `)
})
app.get('/categories',(req,res)=>{
    res.send(categories)
})
