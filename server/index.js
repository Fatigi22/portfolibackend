const Epress=require("express")
const mongoose =require("mongoose")
const app =Epress()
const cors=require("cors")
const body_paser=require("body-parser")
const router=require("./router")
app.use(cors())
app.use(body_paser.json())
app.use("/fatihi",router)
mongoose.connect("mongodb://localhost:27017/").then(()=>{
    console.log("data is coonect ")
}).catch(()=>{
    console.log("sir connnectu habesss asssat ")
})

app.listen(300,()=>{
    console.log("server is runing ")
})