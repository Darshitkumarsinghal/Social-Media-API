const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")


//fetchpost
router.get('/allpost',(req,res) =>{
    Post.find()
        //we want person name & id who post it
        .populate("postedBy","_id name")
        .then(posts =>{
            res.json({posts:posts})
        })
        .catch(err =>{
            console.log(err)
        })
})

//createpost
router.post('/createpost',requireLogin,(req,res) =>{
    const {title,body} = req.body
    if(!title || !body){
        res.status(422).json({error:"please add all the fields"})

    }
    // we do not want store password in post section
    req.user.password =undefined
    const post = new Post({
        title,
        body,
        postedBy:req.user
            //middeleware se req.user laya gya
    })
    post.save().then(result =>{
        res.json({post:result})
    }).catch(err =>{
        console.log(err)
    })
})

//fetch all posts of login user
router.get('/mypost',requireLogin,(req,res) =>{
    Post.find({postedBy:req.user._id})
        .populate("postedBy" ,"_id name")
        .then(mypost =>{
            res.json({mypost})
        })
        .catch(err =>{
            console.log(err)
        })
})

















module.exports = router