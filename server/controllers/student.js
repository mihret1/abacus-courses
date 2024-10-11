
const Student=require('../models/student')


const registerStudent=async(req,res)=>{  

    try{
        const student =req.body
        const newStudent= await Student.create(student)
        if(!newStudent) return res.status(400).send('cant create')
        res.status(200).json(newStudent)
        
    }catch(error){
        res.status(500).json({'the error':error})
    }
}


const getStudents=async(req,res)=>{
    try{
        const student=await Student.find()
        if(!student) return res.send('faild')
        res.status(200).json(student)    
    }catch(err){
        res.status(500).send(err)
    }
    
}


const getOneStudent=async(req,res)=>{
    try{
        const {id}=req.params
        const student=await Student.findById(id)
        if(!student) return res.status(400).send('failed')
        res.status(200).json(student)
    
    }catch(error){
        res.status(500).send(error)
    }
    
}

const deleteStudent=async(req,res)=>{
    try{
      const student=  await Student.findByIdAndDelete(req.params.id)
      if(!student) return res.status(400).send('faild')
      res.status(200).json({msg:'deleted', student})
        
    }catch(error){
        res.status(500).json(error)
    }
}


const updateStudent=async(req,res)=>{
    try{
        const datas=req.body
        const {id}=req.params
        const student= await Student.findByIdAndUpdate(id,datas,{new:true})
         if(!student) return res.status(400).send('failed')
        res.status(200).json( student)
    }catch(error){
        res.status(500).json(error.message)
    }
  



}

module.exports={updateStudent,deleteStudent,getOneStudent,getStudents,registerStudent}