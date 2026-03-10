const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")

router.post("/register", async(req,res)=>{

const hashed = await bcrypt.hash(req.body.password,10)

const user = new User({

username:req.body.username,
email:req.body.email,
password:hashed

})

await user.save()

res.json({message:"User created"})

})

module.exports = router
