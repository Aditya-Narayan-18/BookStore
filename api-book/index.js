const express = require('express')
const cors = require('cors')
const connect =  require('./connection')
const book = require('./routes/book')
const mobile = require('./routes/mobile')
const user = require('./routes/user')
const createAdmin = require('./createAdmin')
const app = express();
app.use(express.json())
app.use(cors())
app.use(book);
app.use(mobile);
app.use(user)
//app.use(createAdmin);
connect();
createAdmin();


app.listen(3000, (err)=> {
    if(err) {
        console.log(err);
    } else {
        console.log("Server is running on 3000")
    }
})