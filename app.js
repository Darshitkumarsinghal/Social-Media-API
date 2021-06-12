const express = require("express")
const app = express();
const PORT = 5000;
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
//store models
require('./models/User')



//middleware
app.use(express.json())


//routes
app.use(require('./routes/auth'));

app.listen(PORT, () =>{
    console.log(`server is running ${PORT}`)
})
