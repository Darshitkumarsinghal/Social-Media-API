const mongoose = require('mongoose')
const {objectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"No Image"
    },
    postedBy:{
        type:objectId,
        ref:"User"
    }
})

mongoose.model("Post",postSchema)