

const InterestedStudent=require('../models/interested')

const signupInterestedStudent=async(req,res)=>{
      try{
        const student = req.body
        const newStudent= await InterestedStudent.create(student)
        if(!newStudent) return res.send('can`t create')
        res.status(200).json(newStudent)    
      }catch(error){
        res.status(500).send(error)
      }

}

const getInterestedStudents=async(req,res)=>{
    try{
      
        const students=await InterestedStudent.find()
        if(!students) return res.send('there is no')
         res.status(200).json(students)   
    }catch(err){
        res.send(err)
    }
}

const deleteInterestedStudent=async(req,res)=>{
    try{
        const todelete=await InterestedStudent.findById(req.params.id)
        if(!todelete) return res.status(400).send('interested  doenst exit')
        const student=await InterestedStudent.findByIdAndDelete(req.params.id)
        if(!student) return res.send('faild to delete')
        res.status(200).send('deleted')   
    }catch(error){
        res.status(500).send(error)
    }
}

module.exports={getInterestedStudents,signupInterestedStudent,deleteInterestedStudent}