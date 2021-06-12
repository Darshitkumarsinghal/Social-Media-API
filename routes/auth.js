const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const User= mongoose.model("User")
const bcrypt = require("bcryptjs")

router.get('/',(req,res) =>{

})

router.post('/signup',(req,res) =>{
//destucture
    const {name,email,password} = req.body
    if(!email || !password || !name){
        res.status(422).json({error:"please add all the fields"})
    }
    User.findOne({email:email}).then((savedUser) =>{
        if(savedUser){
            res.status(422).json({error:"user already exist"})
        }
        bcrypt.hash(password,12)
            .then(hashedpassword =>{
                const user = new User({
                    email,
                    password:hashedpassword,
                    name
                })
                user.save().then(user =>{
                    res.json({message:"save"})
                }).catch(err =>{
                    console.log(err)

                })
            })

    })
        .catch(err =>{
            console.log(err)
        })
})
router.post('/singin',((req