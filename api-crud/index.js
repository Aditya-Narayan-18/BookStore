const express = require('express')
const connect = require('./connection')
const cors = require('cors')
const book = require('./routes/book')
const mobile = require('./routes/mobile')
const app = express();
app.use(express.json())
app.use(cors())
app.use(book)
app.use(mobile)
connect();



app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server is running on port 3000")
    }
})