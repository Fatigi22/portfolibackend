const Epress=require("express")
const mongoose =require("mongoose")
const app =express()
const router =require("./router")
mongoose.connect("").then((data)=>{
    console.log(data)
}).catch(()=>{
    console.log("sir connnectu habesss asssat ")
})

app.listen(300,()=>{
    console.log("server is runing ")
})