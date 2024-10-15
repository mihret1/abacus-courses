const {Login,Signup, deleteUser} =require('../controllers/auth')
const express=require('express')
const routes=express.Router()


routes.post('/login',Login)
routes.post('/signup',Signup)
routes.delete('/:id',deleteUser)


module.exports=routes