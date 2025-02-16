const express = require('express');
const router = express.Router();
const connect=require('./model.js')
router.get("/",async function name(params) {
   await connect.find().then(()=>{
    console.log("data afficher ")
   })
})
router.post("/",async(req,res)=>{
    const {name,email,phone,message}=req.body
const data=  new connect({
    name,email,phone,message
})
data.save().then(()=>{
    res.send("insertion les donner ")
}).catch(()=>{
    res.send("ne pas insetion les donner ")
})
})
router.delete("/",()=>{
    const id=req.body
    connect.deleteOne(id)
    console.log("data is supremer")
})
module.exports=router