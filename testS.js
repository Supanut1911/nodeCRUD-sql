const express = require('express')
const app = express();
const file = require('express-fileupload')

app.use(file())

app.get('/', (req,res)=>{
    res.send('hello')
})

app.listen(3000, ()=> {
    console.log("ok")
})