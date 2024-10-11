const {signupInterestedStudent,getInterestedStudents, deleteInterestedStudent} =require('../controllers/interested')


const express=require('express')
const routes=express.Router()

routes.get('/',getInterestedStudents)
routes.post('/',signupInterestedStudent)
routes.delete('/:id',deleteInterestedStudent)


module.exports=routes