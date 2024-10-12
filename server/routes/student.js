const {getOneStudent,getStudents,registerStudent,deleteStudent,updateStudent} =require('../controllers/student')
const express=require('express')

const routes=express.Router()

routes.get('/',getStudents)
routes.post('/',registerStudent)
routes.get('/:id',getOneStudent)
routes.route('/:id')
       .delete(deleteStudent) 
       .put(updateStudent)       


module.exports=routes