
const mongoose=require('mongoose')

const interestedStudentSchema= new mongoose.Schema({
    fullname:String,
    phoneNumber:String,
    email:String

})

const interestedModel=mongoose.model('InterestedStudent',interestedStudentSchema)
module.exports=interestedModel