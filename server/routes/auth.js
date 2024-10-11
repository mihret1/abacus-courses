const {Login,Signup, deleteUser} =require('../controllers/auth')
const express=require('express')
const routes=express.Router()


routes.get('/',Login)
routes.post('/',Signup)
routes.delete('/:id',deleteUser)

module.exports=routes