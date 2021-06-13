const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const User= mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {JWT_SECRETE} = require("../keys")
const requireLogin = require('../middleware/requireLogin')

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
router.post('/signin',((req, res) => {

    const {email,password} = req.body
    if(!email || !password){
        res.status(422).json({err:"please add all the fields"})
    }
    User.findOne({email:email})
        .then(savedUser =>{
            if(!savedUser){
              return  res.status(422).json({error:"invalid email or password"})
            }
           bcrypt.compare(password,savedUser.password)
               .then(doMatch =>{
                   if(doMatch){
                       //res.json({message:"sucessfully sign in"})
                       //generate token
                       const token = jwt.sign({id:savedUser._id},JWT_SECRETE)
                   res.json({token:token})
                   }
                   else{
                       return  res.status(422).json({error:"invalid email or password"})
                   }
               })
               .catch(err =>{
                   console.log(err)
               })

        })
}))
module.exports = router
