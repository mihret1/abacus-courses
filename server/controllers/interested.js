

const InterestedStudent=require('../models/interested')

const signupInterestedStudent=async(req,res)=>{
      try{
        const student = req.body
        const newStudent= await InterestedStudent.create(student)
        if(!newStudent) res.send('cant create')
        res.status(204).json(newStudent)    
      }catch(error){
        res.send(error)
      }

}

const getInterestedStudents=async(req,res)=>{
    try{
        const students=await InterestedStudent.find()
        if(!students) res.send('there is no')
         res.json(students)   
    }catch(err){
        res.send(err)
    }
}

const deleteInterestedStudent=async(req,res)=>{
    try{
        const student=await InterestedStudent.findByIdAndDelete(req.params.id)
        if(!student) res.send('faild')
        res.send('deleted')   
    }catch(error){
        res.send(error)
    }
}

module.exports={getInterestedStudents,signupInterestedStudent,deleteInterestedStudent}