const express = require("express")
const app = express();
const PORT = 5000;

//database connection
const mongoose = require("mongoose");
const {MONGO_URL} = require("./keys")
mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',() =>{
    console.log("connected")
})
mongoose.connection.on('error',(err) =>{
    console.log("error",err)
})
//register models
require('./models/User')
require('./models/Post')




//middleware
app.use(express.json())


//routes
app.use(require('./routes/auth'));
app.use(require('./routes/post'))

app.listen(PORT, () =>{
    console.log(`server is running ${PORT}`)
})
