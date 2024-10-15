const mongoose=require('mongoose')


const studentSchema = new mongoose.Schema({
    phone:String,
    fullname:String,
    account:String,
    reciept:String,
    status:{
      default:'inprogress',
      type:String
    }
  },{timestamps:true}) 

  
const studentModel=mongoose.model('Student',studentSchema)
module.exports=studentModel