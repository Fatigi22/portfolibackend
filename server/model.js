const mongoose =require("mongoose")
const db =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
message:{
    type:String,
    required:true
}
})
const data =mongoose.model("contacet",db)
module.exports=data