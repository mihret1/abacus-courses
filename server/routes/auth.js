const {Login,Signup, deleteUser,requireReset, resetPassword} =require('../controllers/auth')
const express=require('express')
const routes=express.Router()


routes.post('/login',Login)
routes.post('/signup',Signup)
routes.delete('/:id',deleteUser)
routes.post('/require-reset',requireReset)
routes.post('/reset-password/:token',resetPassword)


module.exports=routes