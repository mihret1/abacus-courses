
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:'user'
    }

})



const userModel=mongoose.model('User',userSchema)
module.exports=userModel