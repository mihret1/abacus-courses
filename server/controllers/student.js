
const Student=require('../models/student')
const registerStudent=async(req,res)=>{  

    try{
        const fields =req.body
        const newStudent= await Student.create(fields)
        res.status(200).json(news)
        
    }catch(error){
        res.json({'the error':error})
    }
}


const getStudents=async(req,res)=>{
    try{
        const student=await Student.find()
        if(!student) res.send('faild')
        res.json(student)    
    }catch(err){
        res.send(err)
    }
    
}


const getOneStudent=async(req,res)=>{
    const {id}=req.params
    const student=await Student.findById(id)
    if(!student) res.send('faild')
    res.json(student)
    
}

const deleteStudent=async(req,res)=>{
    try{
      const student=  await Student.findByIdAndDelete(req.params.id)
      res.json(student,'deleted')
        
    }catch(error){
        res.json(error)
    }
}


const updateStudent=async(req,res)=>{
    try{
        const fields=req.body
        const {id}=req.params
        const student= await Student.findByIdAndUpdate(fields,id,{new:true})
         if(!student) res.send('failed')
        res.json({'updated user': student})
    }catch(error){
        res.json(error)
    }
  



}

module.exports={updateStudent,deleteStudent,getOneStudent,getStudents,registerStudent}