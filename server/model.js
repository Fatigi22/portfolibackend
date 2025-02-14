const mongoose=require("mongoose")
const Db= mongoose.model("User",{
Email:string ,
Password:string,
téléphone:Number,
message:string
})
export default Db;