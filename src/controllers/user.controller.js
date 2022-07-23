
require("dotenv").config();
const express = require("express");
const User =require('../Models/user.model')
const router = express.Router();


router.post("/", async(req,res)=>{

  const user= await User.create(req.body);
  
  res.status(200).send(user)

})
router.get("/", async(req,res)=>{

  const user = await User.find().lean().exec();
  
  res.status(200).send(user)

})

router.get("/:id", async(req,res)=>{

  const user = await User.findById(req.params.id).lean().exec();
  
  res.status(200).send(user)

})

router.delete("/:id", async(req,res)=>{

  const user= await User.findByIdAndDelete(req.params.id);
  
  res.status(200).send(user)

})

router.patch("/:id", async(req,res)=>{

  const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
  
  res.status(200).send(user)

})

  module.exports  = router